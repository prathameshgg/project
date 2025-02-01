import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/TherapistDetailsPage.module.css';

const TherapistDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.detailsPage}>
      <div className={styles.container}>
        <button 
          className={styles.backButton}
          onClick={() => navigate('/directory')}
        >
          Back to Directory
        </button>
        <div className={styles.content}>
          <h1>Therapist Profile</h1>
          <p>Details for therapist ID: {id}</p>
          <p>This page is under construction. Please check back later for full therapist profiles.</p>
        </div>
      </div>
    </div>
  );
};

export default TherapistDetailsPage;