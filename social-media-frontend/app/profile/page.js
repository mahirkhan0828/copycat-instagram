'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchUserPosts, fetchFollowers, fetchFollowing } from '../../services/api';
import PostCard from '../../components/PostCard';
import Link from 'next/link';
import styles from './Profile.module.css';
import { useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Safely access localStorage due to build failures when deploying
      const storedUser = localStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []);


  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['userPosts', user?.id],
    queryFn: () => fetchUserPosts(user?.id),
    enabled: !!user,
  });

  const { data: following, isLoading: followingLoading } = useQuery({
    queryKey: ['following', user?.id],
    queryFn: () => fetchFollowing(user?.id),
    enabled: !!user,
  });

  const { data: followers, isLoading: followersLoading } = useQuery({
    queryKey: ['followers', user?.id],
    queryFn: () => fetchFollowers(user?.id),
    enabled: !!user,
  });

  if (!user) {
    return (
      <div className={styles.profileContainer}>
        <h1>You are not logged in</h1>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <section className={styles.followSection}>
        <h2>Following</h2>
        {followingLoading ? (
          <p>Loading...</p>
        ) : following?.length > 0 ? (
          following.map((follow) => (
            <Link key={follow.id} href={`/users/${follow.id}`} className={styles.followLink}>
              {follow.username}
            </Link>
          ))
        ) : (
          <p>You are not following anyone yet.</p>
        )}
      </section>

      <section className={styles.followSection}>
        <h2>Followers</h2>
        {followersLoading ? (
          <p>Loading...</p>
        ) : followers?.length > 0 ? (
          followers.map((follower) => (
            <Link key={follower.id} href={`/users/${follower.id}`} className={styles.followLink}>
              {follower.username}
            </Link>
          ))
        ) : (
          <p>No one is following you yet.</p>
        )}
      </section>

      <section className={styles.postsSection}>
        <h2>Your Posts</h2>
        {postsLoading ? (
          <p>Loading posts...</p>
        ) : posts?.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post}/>)
        ) : (
          <p>You haven't created any posts yet.</p>
        )}
      </section>
    </div>
  );
}
