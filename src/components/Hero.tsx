import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Hero.module.css';
import StreakIndicator from './StreakIndicator';

const quotes = [
  {
    text: "Mental health is not a destination, but a journey",
    author: "SereniLink"
  },
  {
    text: "You are stronger than you know, braver than you believe",
    author: "Christopher Robin"
  },
  {
    text: "Recovery is not one and done. It is one day at a time",
    author: "Unknown"
  },
  {
    text: "Your mental health is a priority. Your happiness is essential",
    author: "SereniLink"
  },
  {
    text: "You don't have to be positive all the time. You just have to not give up",
    author: "Unknown"
  },
  {
    text: "Self-care is not selfish. You cannot serve from an empty vessel",
    author: "Eleanor Brown"
  },
  {
    text: "Every day is a new beginning. Take a deep breath and start again",
    author: "SereniLink"
  },
  {
    text: "In order to confuse your enemy, you've to first confuse yourself",
    author: "YV"
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFadeIn(true);
      }, 500); // Wait for fade out before changing quote
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.streakWrapper}>
        <StreakIndicator />
      </div>

      <div className={styles.typedContainer}>
        <h1>Welcome to SereniLink</h1>
        <p>India's 1st mental health support and resource hub for youth. </p>
      </div>

      <div className={`${styles.quoteContainer} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
        <p className={styles.quote}>{quotes[currentQuote].text}</p>
        <p className={styles.author}>- {quotes[currentQuote].author}</p>
      </div>

      <div className={styles.heroButtons}>
        <button 
          className="get-started-btn"
          onClick={() => navigate('/general-assessment')}
        >
          Get Started
        </button>
        <button onClick={() => navigate('/directory')}>Find a Therapist</button>
      </div>
    </section>
  );
}

export default Hero;