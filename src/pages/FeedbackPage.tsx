import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/FeedbackPage.module.css';

interface FeedbackData {
  user_name: string;
  email: string;
  rating: number;
  comments: string;
}

const FeedbackPage = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    user_name: '',
    email: '',
    rating: 5,
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:8000/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: formData.user_name,
          email: formData.email,
          rating: formData.rating,
          comments: formData.comments
        })
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus(error instanceof Error ? error.message : 'Failed to submit feedback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Share Your Feedback</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.user_name}
            onChange={(e) => setFormData({...formData, user_name: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Rating</label>
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`${styles.star} ${star <= formData.rating ? styles.active : ''}`}
                onClick={() => setFormData({...formData, rating: star})}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.comments}
            onChange={(e) => setFormData({...formData, comments: e.target.value})}
            required
            rows={5}
          />
        </div>

        {submitStatus && <div className={styles.status}>{submitStatus}</div>}
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackPage; 