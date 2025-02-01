import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ThankYouPage.module.css';

const ThankYouPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Thank You! 🙏</h1>
        <p>Your feedback has been successfully submitted.</p>
        <Link to="/" className={styles.homeLink}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage; 