import React, { useState, useEffect } from 'react';
import QuizHero from '../components/quiz/QuizHero';
import QuizForm from '../components/quiz/QuizForm';
import styles from '../styles/QuizPage.module.css';

interface QuizResult {
  anxiety: string;
  meditation: string;
  sleep: string;
}

const QuizPage = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuiz(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
  };

  return (
    <div className={styles.quizPage}>
      {!showQuiz && <QuizHero />}
      {showQuiz && (
        <QuizForm 
          onComplete={handleQuizComplete}
          result={quizResult}
        />
      )}
    </div>
  );
};

export default QuizPage;