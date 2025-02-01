import React, { useState, useRef } from 'react';
import { meditationExercises } from '../data/meditationExercises';
import ExerciseCard from '../components/meditation/ExerciseCard';
import MeditationTimer from '../components/MeditationTimer';
import styles from '../styles/MeditationPage.module.css';

const MeditationPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const timerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (id: string) => {
    sessionStorage.setItem('scrollToTimer', id);
  };

  return (
    <div className={styles.meditationPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Find Your Inner Peace</h1>
          <p>Begin your journey to mindfulness with our guided meditation practices</p>
        </div>
      </section>

      <section className={styles.exercises}>
        <div className={styles.container}>
          <h2>Meditation Exercises</h2>
          <div className={styles.exercisesGrid}>
            {meditationExercises.map((exercise) => (
              <div key={exercise.id} className={styles.card}>
                <ExerciseCard
                  exercise={exercise}
                  onSelect={() => setSelectedExercise(exercise)}
                  isSelected={selectedExercise?.id === exercise.id}
                >
                  <button className={styles.startButton} onClick={() => handleCardClick(exercise.id)}>
                    Start Practice
                  </button>
                </ExerciseCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedExercise && (
        <section className={styles.timerSection}>
          <div className={styles.container}>
            <div className={styles.timerCard}>
              <h2>Practice {selectedExercise.title}</h2>
              <MeditationTimer 
                initialDuration={selectedExercise.duration}
                technique={selectedExercise.title}
              />
            </div>
          </div>
        </section>
      )}

      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>"This meditation app has transformed my daily routine. I feel more centered and peaceful."</p>
              <cite>- Sarah M.</cite>
            </div>
            <div className={styles.testimonial}>
              <p>"The guided sessions are perfect for beginners like me. Highly recommended!"</p>
              <cite>- Michael R.</cite>
            </div>
            <div className={styles.testimonial}>
              <p>"I love how easy it is to track my meditation progress. Great for building a consistent practice."</p>
              <cite>- Emma L.</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeditationPage;