'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <h1>Copycat Instagram</h1>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        {user ? (
          <>
            <li><Link href="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
