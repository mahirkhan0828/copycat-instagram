'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { registerUser } from '../../services/api';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Auth.module.css';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      localStorage.setItem('user', JSON.stringify(response.user));
      alert("Registration Successful!");
      router.push('/');
    } catch (err) {
      setError("Registration Failed. Please try again.");
    }
  };

  return (
    <div className={styles.authContainer}>
      <h1>Register</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input {...register("username", { required: true })} />

        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
