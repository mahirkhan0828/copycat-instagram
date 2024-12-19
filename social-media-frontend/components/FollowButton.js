'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { followUser, unfollowUser, fetchFollowing } from '../services/api';
import styles from './FollowButton.module.css';

export default function FollowButton({ followerId, followingId }) {
  const queryClient = useQueryClient();

  const { data: following, isLoading } = useQuery({
    queryKey: ['following', followerId],
    queryFn: () => fetchFollowing(followerId),
  });

  const isFollowing = following?.some((user) => user.id === followingId);

  const followMutation = useMutation({
    mutationFn: followUser,
    onSuccess: () => queryClient.invalidateQueries(['following', followerId]),
  });

  const unfollowMutation = useMutation({
    mutationFn: unfollowUser,
    onSuccess: () => queryClient.invalidateQueries(['following', followerId]),
  });

  const handleFollow = () => {
    const data = {followerId, followingId};

    if (isFollowing) {
      unfollowMutation.mutate(data);
    } else {
      followMutation.mutate(data);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <button
      className={isFollowing ? styles.unfollowButton : styles.followButton}
      onClick={handleFollow}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}
