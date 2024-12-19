'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchUserProfile } from '../../../services/api';
import PostCard from '../../../components/PostCard';
import FollowButton from '../../../components/FollowButton';
import styles from './UserProfile.module.css';

export default function UserProfilePage() {
  const userId = useParams().userId; 
  const currentUser = JSON.parse(localStorage.getItem('user'));

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => fetchUserProfile(userId),
  });

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error loading profile!</p>;

  const { user, posts } = data;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>{user.username}'s Profile</h1>

        {currentUser.id !== user.id && (
          <FollowButton followerId={currentUser.id} followingId={user.id} />
        )}
      </div>

      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>This user hasn't created any posts yet.</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
