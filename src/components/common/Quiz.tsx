import React, { useState } from 'react';
import { Question, QuizResult, QuizProps } from '../../types/quiz';

const Quiz: React.FC<QuizProps> = ({ title, description, questions, getResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((sum, curr) => sum + curr, 0);
      setResult(getResult(totalScore));
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  if (showResult && result) {
    return (
      <div className="quiz-container">
        <h2>Your Results</h2>
        <div className="result-section">
          <p className="score">Score: {result.score}</p>
          <p className="interpretation">{result.interpretation}</p>
          <div className="recommendations">
            <h3>Recommendations:</h3>
            <ul>
              {result.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
          <button onClick={resetQuiz} className="reset-button">
            Take Test Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <div className="question-section">
        <h2>Question {currentQuestion + 1} of {questions.length}</h2>
        <p className="question-text">{questions[currentQuestion].text}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="option-button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 