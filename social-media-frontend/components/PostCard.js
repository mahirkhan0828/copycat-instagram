"use client";

import styles from "./PostCard.module.css";
import Link from "next/link";

export default function PostCard({ post, isCurrentUserPost }) {
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        {!isCurrentUserPost && (
          <Link href={`/users/${post.user_id}`}>
            <h2>{post.username}</h2>
          </Link>
        )}

        <small>{new Date(post.created_at).toLocaleDateString()}</small>
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
