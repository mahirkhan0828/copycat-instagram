'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { loginUser } from '../../services/api';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Auth.module.css';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem('user', JSON.stringify(response.user));
      alert("Login Successful!");
      router.push('/'); 
    } catch (err) {
      setError("Login Failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>Log In</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
