'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../services/api';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

export default function CreatePostForm() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      alert('Post created successfully!');
      queryClient.invalidateQueries(['userFeed']);  
      reset();  
    },
  });

  const onSubmit = (data) => {
    const userId = JSON.parse(localStorage.getItem('user')).id; 
    mutation.mutate({ ...data, userId });
  };

  return (
    <div className={styles.formContainer}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Content:</label>
        <textarea {...register('content', { required: true })} />

        <label>Image URL (optional):</label>
        <input {...register('image')} />

        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
}
