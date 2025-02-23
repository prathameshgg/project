import React from 'react';
import styles from '../styles/ProgressIndicator.module.css';

interface Props {
  current: number;
  total: number;
}

const ProgressIndicator: React.FC<Props> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className={styles.progressText}>
        Question {current} of {total}
      </div>
    </div>
  );
};

export default ProgressIndicator; 