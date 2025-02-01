import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Play, Pause, RefreshCw, Volume2, ArrowLeft } from 'lucide-react';
import { meditationExercises } from '../data/meditationExercises';
import styles from '../styles/PracticeSessionPage.module.css';

const PracticeSessionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const exercise = meditationExercises.find(ex => ex.id === id);

  useEffect(() => {
    if (exercise) {
      setTimeLeft(exercise.duration);
    }
  }, [exercise]);

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

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(exercise?.duration || 0);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!exercise) {
    return (
      <div className={styles.errorContainer}>
        <h1>Exercise not found</h1>
        <button onClick={() => navigate('/meditation')} className={styles.backButton}>
          <ArrowLeft size={20} />
          Back to Meditation
        </button>
      </div>
    );
  }

  return (
    <div className={styles.practiceSessionPage}>
      <button 
        onClick={() => navigate('/meditation')} 
        className={styles.backButton}
      >
        <ArrowLeft size={20} />
        Back to Menu
      </button>

      <div className={styles.sessionContainer}>
        <h1>{exercise.title}</h1>
        
        <div className={styles.timerDisplay}>
          {formatTime(timeLeft)}
        </div>

        <div className={styles.controls}>
          {!isRunning ? (
            <button 
              onClick={handleStart}
              className={`${styles.controlButton} ${styles.startButton}`}
              aria-label="Start Timer"
            >
              <Play size={24} />
              Start Timer
            </button>
          ) : (
            <button 
              onClick={handlePause}
              className={`${styles.controlButton} ${styles.pauseButton}`}
              aria-label="Pause Timer"
            >
              <Pause size={24} />
              Pause Timer
            </button>
          )}

          <button 
            onClick={handleReset}
            className={`${styles.controlButton} ${styles.resetButton}`}
            aria-label="Reset Timer"
          >
            <RefreshCw size={24} />
            Reset Timer
          </button>
        </div>

        <button 
          onClick={toggleAudio}
          className={`${styles.audioButton} ${isPlaying ? styles.playing : ''}`}
          aria-label={isPlaying ? 'Pause Instructions' : 'Play Instructions'}
        >
          <Volume2 size={24} />
          Instructions
        </button>

        <audio 
          ref={audioRef}
          src="/audio/[AUDIO_INSTRUCTIONS_PLACEHOLDER.mp3]"
          onEnded={() => setIsPlaying(false)}
        />

        <div className={styles.instructions}>
          <h2>Instructions:</h2>
          <ol>
            {exercise.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PracticeSessionPage;