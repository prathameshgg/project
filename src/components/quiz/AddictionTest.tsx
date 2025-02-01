import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const addictionQuestions: Question[] = [
  {
    id: 1,
    text: "Have you found that you need to use more of a substance or engage in a behavior more frequently to get the same effect?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  },
  {
    id: 2,
    text: "Have you experienced withdrawal symptoms (anxiety, irritability, shaking) when unable to engage in the behavior or use the substance?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  },
  {
    id: 3,
    text: "Have you continued using substances or engaging in behaviors despite knowing they are causing physical or psychological problems?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  },
  {
    id: 4,
    text: "Have you had a persistent desire or unsuccessful efforts to cut down or control your use/behavior?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  },
  {
    id: 5,
    text: "Have you spent a great deal of time obtaining, using, or recovering from the effects of substances or behaviors?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  },
  {
    id: 6,
    text: "Have you given up or reduced important activities because of your use/behavior?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  }
];

const getAddictionResult = (score: number): QuizResult => {
  if (score <= 8) {
    return {
      score,
      interpretation: "Your responses suggest minimal risk of addiction.",
      recommendations: [
        "Continue monitoring your behaviors and substance use",
        "Maintain healthy coping mechanisms",
        "Practice self-awareness",
        "Keep a balanced lifestyle"
      ]
    };
  } else if (score <= 15) {
    return {
      score,
      interpretation: "Your responses suggest mild risk of addiction.",
      recommendations: [
        "Consider speaking with our addiction counselors",
        "Develop alternative coping strategies with our team",
        "Join our early intervention programs",
        "Build a support network through our community",
        "Learn stress management techniques with our specialists"
      ]
    };
  } else if (score <= 22) {
    return {
      score,
      interpretation: "Your responses suggest moderate risk of addiction.",
      recommendations: [
        "Schedule an evaluation with our addiction specialists",
        "Explore our treatment options",
        "Join our support groups",
        "Work with our counselors on reducing use/behavior",
        "Participate in our relapse prevention programs",
        "Learn coping strategies with our team"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your responses suggest significant risk of addiction.",
      recommendations: [
        "Schedule an immediate evaluation with our specialists",
        "Consider our comprehensive treatment programs",
        "Join our intensive support groups",
        "Work with our addiction recovery team",
        "Participate in our structured recovery programs",
        "Remember that recovery is possible with our support"
      ]
    };
  }
};

const AddictionTest = () => {
  return (
    <Quiz
      title="Addiction Screening Test"
      description="This screening test will help identify potential addiction symptoms related to substances or behaviors. Please answer each question honestly. Note: This test is not a diagnosis. If you're struggling with addiction, our professionals are here to help you. If you're in crisis, contact our emergency services immediately."
      questions={addictionQuestions}
      getResult={getAddictionResult}
    />
  );
};

export default AddictionTest; 