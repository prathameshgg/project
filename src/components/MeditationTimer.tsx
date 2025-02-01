import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import styles from '../styles/MeditationTimer.module.css';

interface MeditationTimerProps {
  initialDuration: number;
  technique: string;
}

const MeditationTimer: React.FC<MeditationTimerProps> = ({ initialDuration, technique }) => {
  const [duration, setDuration] = useState(initialDuration);
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const reset = useCallback(() => {
    setTimeLeft(duration);
    setIsRunning(false);
  }, [duration]);

  useEffect(() => {
    setDuration(initialDuration);
    setTimeLeft(initialDuration);
  }, [initialDuration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsRunning(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <div className={styles.timerContainer}>
      <select
        className={styles.durationSelect}
        value={duration}
        onChange={(e) => {
          const newDuration = parseInt(e.target.value);
          setDuration(newDuration);
          setTimeLeft(newDuration);
          setIsRunning(false);
        }}
      >
        <option value={300}>5 Minutes</option>
        <option value={600}>10 Minutes</option>
        <option value={900}>15 Minutes</option>
        <option value={1200}>20 Minutes</option>
      </select>

      <div className={styles.timerDisplay}>{formatTime(timeLeft)}</div>

      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className={styles.controlButton} onClick={reset}>
          <RefreshCw size={24} />
        </button>
      </div>
    </div>
  );
};

export default MeditationTimer;