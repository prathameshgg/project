import React from 'react';
import styles from '../../styles/QuizPage.module.css';

const QuizHero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to the Self-Assessment Quiz</h1>
      <p>Discover your mindfulness and wellness journey through this quick quiz.</p>
    </section>
  );
};

export default QuizHero;