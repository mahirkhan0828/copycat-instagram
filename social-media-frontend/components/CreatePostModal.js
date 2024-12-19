'use client';

import { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import styles from './CreatePostModal.module.css';

export default function CreatePostModal() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <button 
          className={styles.createPostButton} 
          onClick={() => setIsOpen(true)}
          aria-label="Create New Post"
        >
          +
        </button>
  
        {isOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button 
                className={styles.closeButton} 
                onClick={() => setIsOpen(false)}
                aria-label="Close Modal"
              >
                &times;
              </button>
  
              <h2>Create New Post</h2>
              <CreatePostForm closeModal={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </>
    );
  }