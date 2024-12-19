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
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
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
        web development. The app supports features such as creating and sharing
        posts, following other users, viewing personalized feeds, checking
        followers and following lists, and clicking on usernames to navigate
        through profiles.
      </p>
      <p className={styles.description}>
        To try the app, use the following demo credentials:
      </p>
      <ul className={styles.featuresList}>
        <li>
          <strong>Email: </strong>testuser@example.com
        </li>
        <li>
          <strong>Password:</strong> password
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
