import React from 'react';
import styles from '../../styles/QuizPage.module.css';

interface QuizQuestionProps {
  question: {
    id: string;
    text: string;
    options: {
      value: string;
      label: string;
    }[];
  };
  isActive: boolean;
  onAnswer: (answer: string) => void;
}

const QuizQuestion = ({ question, isActive, onAnswer }: QuizQuestionProps) => {
  return (
    <div className={`${styles.quizQuestion} ${isActive ? styles.active : ''}`}>
      <p>{question.text}</p>
      <div className={styles.options}>
        {question.options.map((option) => (
          <div key={option.value} className={styles.option}>
            <input
              type="radio"
              id={`${question.id}-${option.value}`}
              name={question.id}
              value={option.value}
              onChange={() => onAnswer(option.value)}
            />
            <label htmlFor={`${question.id}-${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;