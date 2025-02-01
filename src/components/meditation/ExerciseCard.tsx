import React from 'react';
import { Play } from 'lucide-react';
import { MeditationExercise } from '../../data/meditationExercises';
import styles from '../../styles/MeditationPage.module.css';

interface ExerciseCardProps {
  exercise: MeditationExercise;
  onSelect: () => void;
  isSelected: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onSelect, isSelected }) => {
  return (
    <div className={`${styles.exerciseCard} ${isSelected ? styles.selected : ''}`}>
      <img 
        src={exercise.imageUrl} 
        alt={exercise.title} 
        className={styles.exerciseImage}
      />
      <div className={styles.exerciseContent}>
        <h3>{exercise.title}</h3>
        <p>{exercise.description}</p>
        <button 
          className={styles.startButton}
          onClick={onSelect}
        >
          <Play size={16} />
          Start Practice
        </button>
      </div>
      
      {isSelected && (
        <div className={styles.exerciseDetails}>
          <div className={styles.benefitsSection}>
            <h4>Benefits:</h4>
            <ul>
              {exercise.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.instructionsSection}>
            <h4>Instructions:</h4>
            <ol>
              {exercise.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;