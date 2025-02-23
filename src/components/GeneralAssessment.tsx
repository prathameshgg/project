import React, { useState, useEffect } from 'react';
import { questions, answerOptions, Question } from '../data/generalAssessmentQuestions';
import styles from '../styles/GeneralAssessment.module.css';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import { FaSmile, FaMeh, FaFrown, FaRegLightbulb } from 'react-icons/fa';

interface Answer {
  questionId: number;
  value: number;
}

const encouragingMessages = [
  "You're doing great! Keep going! 😊",
  "Every answer brings more clarity! 🌟",
  "You're making excellent progress! 💪",
  "Thank you for being honest with yourself! 🙏",
  "Almost there! You're doing amazing! ✨"
];

const GeneralAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!showResults) {
      setMessage(encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)]);
    }
  }, [currentQuestion]);

  const getEmoji = (value: number) => {
    if (value <= 1) return <FaSmile className={styles.answerEmoji} color="#4CAF50" />;
    if (value <= 2) return <FaMeh className={styles.answerEmoji} color="#FFC107" />;
    return <FaFrown className={styles.answerEmoji} color="#F44336" />;
  };

  const handleAnswer = (value: number) => {
    setAnswers([...answers, { questionId: questions[currentQuestion].id, value }]);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const scores = {
      depression: 0,
      anxiety: 0,
      stress: 0,
      bipolar: 0
    };

    answers.forEach((answer, index) => {
      const question = questions[index];
      const value = answer.value;

      scores.depression += question.weight.depression * value;
      scores.anxiety += question.weight.anxiety * value;
      scores.stress += question.weight.stress * value;
      scores.bipolar += question.weight.bipolar * value;
    });

    // Normalize scores
    const maxPossibleScore = 60; // 20 questions * 3 (max weight) * 4 (max answer value)
    const normalizedScores = {
      depression: (scores.depression / maxPossibleScore) * 100,
      anxiety: (scores.anxiety / maxPossibleScore) * 100,
      stress: (scores.stress / maxPossibleScore) * 100,
      bipolar: (scores.bipolar / maxPossibleScore) * 100
    };

    setResults(normalizedScores);
    setShowResults(true);
  };

  const getRecommendation = (scores: any) => {
    const highestScore = Math.max(...Object.values(scores));
    const condition = Object.entries(scores).find(([_, score]) => score === highestScore)?.[0];

    const recommendations = {
      depression: "Based on your responses, you may be experiencing symptoms of depression. We recommend scheduling an appointment with a mental health professional for a thorough evaluation.",
      anxiety: "Your responses indicate potential anxiety symptoms. Consider consulting with a mental health professional who specializes in anxiety disorders.",
      stress: "Your results suggest you might be experiencing high levels of stress. Consider stress management techniques and consulting with a mental health professional.",
      bipolar: "Your responses indicate some symptoms that could be related to bipolar disorder. It's important to consult with a mental health professional for a proper evaluation."
    };

    return recommendations[condition as keyof typeof recommendations] || "";
  };

  if (showResults) {
    return (
      <div className={`${styles.resultsContainer} ${styles.fadeIn}`}>
        <h2>Your Assessment Results</h2>
        <div className={styles.resultsGrid}>
          {Object.entries(results).map(([condition, score]) => (
            <div key={condition} className={`${styles.resultCard} ${styles.slideIn}`}>
              <h3>
                {condition.charAt(0).toUpperCase() + condition.slice(1)}
                <FaRegLightbulb className={styles.insightIcon} />
              </h3>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ 
                    width: `${Math.round(score as number)}%`,
                    backgroundColor: `hsl(${120 - (score as number)}, 70%, 45%)`
                  }}
                />
              </div>
              <p>{Math.round(score as number)}%</p>
            </div>
          ))}
        </div>
        <div className={`${styles.recommendation} ${styles.slideIn}`}>
          <h3>Recommendation</h3>
          <p>{getRecommendation(results)}</p>
        </div>
        <div className={`${styles.actionButtons} ${styles.slideIn}`}>
          <button 
            className={styles.retakeButton}
            onClick={() => window.location.reload()}
          >
            Retake Assessment
          </button>
          <button 
            className={styles.viewTestsButton}
            onClick={() => navigate('/mental-health-tests')}
          >
            View Specific Tests
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.assessmentContainer} ${styles.fadeIn}`}>
      <ProgressIndicator 
        current={currentQuestion + 1} 
        total={questions.length} 
      />
      
      <div className={styles.messageBox}>
        {message}
      </div>

      <div className={`${styles.questionCard} ${styles.slideIn}`}>
        <h3>{questions[currentQuestion].text}</h3>
        <div className={styles.answerOptions}>
          {answerOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={styles.answerButton}
            >
              {getEmoji(option.value)}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralAssessment; 