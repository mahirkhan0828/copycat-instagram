'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchUserFeed } from '../services/api';
import PostCard from './PostCard';
import CreatePostModal from './CreatePostModal';
import styles from './Feed.module.css';

export default function Feed() {
  const userId = JSON.parse(localStorage.getItem('user')).id;

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['userFeed', userId],
    queryFn: () => fetchUserFeed(userId),
  });

  if (isLoading) return <p className={styles.loadingMessage}>Loading feed...</p>;
  if (isError) return <p className={styles.errorMessage}>Error fetching posts!</p>;

  return (
    <div className={styles.container}>
      <h1>Your Feed</h1>

      <CreatePostModal />

      <div className={styles.postsList}>
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
