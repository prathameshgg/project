import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/MeditationCategory.module.css';

interface MeditationTechnique {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: number;
}

interface MeditationCategoryProps {
  technique: MeditationTechnique;
  onSelect: () => void;
}

const MeditationCategory: React.FC<MeditationCategoryProps> = ({ technique, onSelect }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.categoryCard}>
      <img 
        src={technique.imageUrl} 
        alt={technique.title} 
        className={styles.categoryImage}
      />
      <div className={styles.categoryContent}>
        <h3>{technique.title}</h3>
        <p>{technique.description}</p>
        <div className={styles.categoryActions}>
          <button 
            onClick={onSelect}
            className={styles.startButton}
          >
            Start Practice
          </button>
          <button 
            onClick={() => navigate(`/meditation/${technique.id}`)}
            className={styles.learnButton}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeditationCategory;