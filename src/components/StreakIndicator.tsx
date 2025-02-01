import React, { useEffect, useState } from 'react';
import styles from '../styles/StreakIndicator.module.css';

const StreakIndicator = () => {
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const response = await fetch('/api/streaks/streaks/');
        if (!response.ok) return;
        const data = await response.json();
        const appStreak = data.streaks.find((s: any) => s.habit === 'app_usage');
        setCurrentStreak(appStreak?.current || 0);
      } catch (err) {
        setCurrentStreak(0); // Default to 0 on errors
      }
    };
    fetchStreak();
  }, []);

  const updateStreak = async () => {
    try {
      await fetch('/api/update_streak/app_usage/', {
        method: 'POST',
        credentials: 'include'
      });
      setCurrentStreak(prev => prev + 1);
    } catch (error) {
      console.error('Error updating streak:', error);
    }
  };

  return (
    <div className={styles.streakContainer}>
      <span className={styles.flameEmoji}>🔥</span>
      <span className={styles.streakCount}>{currentStreak}</span>
    </div>
  );
};

export default StreakIndicator; 