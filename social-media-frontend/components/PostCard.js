"use client";

import styles from "./PostCard.module.css";
import Link from "next/link";

export default function PostCard({ post }) {
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const isSameUserId = userId === post.userId;
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        {!isSameUserId && (
          <Link href={`/users/${post.userId}`}>
            <h2>{post.username}</h2>
          </Link>
        )}

        <small>{new Date(post.createdAt).toLocaleDateString()}</small>
      </div>
      <div className={styles.postContent}>
        <p>{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post" className={styles.postImage} />
        )}
      </div>
    </div>
  );
}