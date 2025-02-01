import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import styles from '../../styles/QuizPage.module.css';

interface QuizFormProps {
  onComplete: (result: any) => void;
  result: any;
}

const questions = [
  {
    id: 'anxiety',
    text: 'Do you often feel anxious or stressed?',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' }
    ]
  },
  {
    id: 'meditation',
    text: 'How often do you meditate?',
    options: [
      { value: 'Daily', label: 'Daily' },
      { value: 'Sometimes', label: 'Sometimes' },
      { value: 'Rarely', label: 'Rarely' }
    ]
  },
  {
    id: 'sleep',
    text: 'How well do you sleep at night?',
    options: [
      { value: 'Well', label: 'Well' },
      { value: 'Average', label: 'Average' },
      { value: 'Poorly', label: 'Poorly' }
    ]
  }
];

const QuizForm = ({ onComplete, result }: QuizFormProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResult(true);
        onComplete(answers);
      }
    }, 500);
  };

  if (showResult) {
    return (
      <div className={styles.quizResult}>
        <h2>Your Results</h2>
        <div className={styles.resultSummary}>
          <p>Here's a summary of your responses:</p>
          <ul>
            {Object.entries(answers).map(([question, answer]) => (
              <li key={question}>
                {questions.find(q => q.id === question)?.text}: <strong>{answer}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.quiz}>
      <h2>Take the Self-Assessment Quiz</h2>
      <div className={styles.quizContainer}>
        {questions.map((question, index) => (
          <QuizQuestion
            key={question.id}
            question={question}
            isActive={index === currentQuestion}
            onAnswer={(answer) => handleAnswer(question.id, answer)}
          />
        ))}
      </div>
    </section>
  );
};

export default QuizForm;