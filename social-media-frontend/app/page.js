"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Link from "next/link";
import Feed from "../components/Feed";
import styles from "./Home.module.css";

export default function HomePage() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [setUser]);

  if (user) {
    return <Feed />;
  }

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Welcome to my Copycat Instagram App.</h1>
      <p className={styles.description}>
        Copycat Instagram is a full-stack social media application built as a
        personal development project to explore and practice modern full-stack
        web development. The app supports features such as user authentication,
        post creation, likes, comments, following/unfollowing users, and
        real-time updates through React Query.
      </p>
      <p className={styles.description}>
        To try the app, use the following demo credentials:
      </p>
      <ul className={styles.featuresList}>
        <li>
          <strong>Username: </strong>userA
        </li>
        <li>
          <strong>Password:</strong> passwordA
        </li>
      </ul>

      <div className={styles.ctaButtons}>
        <Link href="/register" className={styles.button}>
          Get Started
        </Link>
        <Link href="/login" className={styles.buttonOutline}>
          Log In
        </Link>
      </div>
    </div>
  );
}
