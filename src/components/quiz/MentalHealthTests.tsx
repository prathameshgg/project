import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/MentalHealthTests.css';

interface TestOption {
  path: string;
  title: string;
  description: string;
  emoji: string;
}

const testOptions: TestOption[] = [
  {
    path: '/depression-test',
    title: 'Depression Test',
    description: 'Evaluate symptoms of depression and get personalized recommendations.',
    emoji: '😔'
  },
  {
    path: '/anxiety-test',
    title: 'Anxiety Test',
    description: 'Assess your anxiety levels and learn coping strategies.',
    emoji: '😰'
  },
  {
    path: '/ptsd-test',
    title: 'PTSD Test',
    description: 'Screen for post-traumatic stress disorder symptoms.',
    emoji: '😣'
  },
  {
    path: '/adhd-test',
    title: 'ADHD Test',
    description: 'Evaluate attention deficit hyperactivity disorder symptoms.',
    emoji: '🤔'
  },
  {
    path: '/bipolar-test',
    title: 'Bipolar Test',
    description: 'Screen for symptoms of bipolar disorder.',
    emoji: '🔄'
  },
  {
    path: '/eating-disorder-test',
    title: 'Eating Disorder Test',
    description: 'Assess symptoms related to eating disorders.',
    emoji: '🍽️'
  },
  {
    path: '/addiction-test',
    title: 'Addiction Test',
    description: 'Evaluate potential substance use and behavioral addiction patterns.',
    emoji: '⛓️'
  },
  {
    path: '/parent-test',
    title: "Parent Test: Child's Mental Health",
    description: "Assess your child's emotional and behavioral well-being.",
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    path: '/youth-mental-health-test',
    title: 'Youth Mental Health Test',
    description: 'For teens and young adults to assess their mental well-being.',
    emoji: '🧑‍🤝‍🧑'
  }
];

const MentalHealthTests: React.FC = () => {
  return (
    <div className="tests-container">
      <div className="tests-header">
        <h1>Mental Health Screening Tests <span className="header-emoji">🧠</span></h1>
        <p>
          Select a test below to evaluate your mental health. These assessments are
          confidential and can help you understand your symptoms better.
        </p>
      </div>
      
      <div className="tests-grid">
        {testOptions.map((test) => (
          <Link to={test.path} key={test.path} className="test-card">
            <div className="test-emoji">{test.emoji}</div>
            <h2>{test.title}</h2>
            <p>{test.description}</p>
            <span className="take-test-btn">Take Test →</span>
          </Link>
        ))}
      </div>
      
      <div className="tests-footer">
        <p className="disclaimer">
          <span className="disclaimer-emoji">⚠️</span>
          Note: These tests are for screening purposes only and should not be considered as a diagnosis. 
          Please consult with our mental health professional for proper evaluation and treatment.
        </p>
      </div>
    </div>
  );
};

export default MentalHealthTests; 