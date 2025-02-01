import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const eatingDisorderQuestions: Question[] = [
  {
    id: 1,
    text: "Do you make yourself sick because you feel uncomfortably full?",
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
    text: "Do you worry that you have lost control over how much you eat?",
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
    text: "Have you recently lost more than 14 pounds in a 3-month period?",
    options: [
      { value: 0, label: "No" },
      { value: 2, label: "Maybe" },
      { value: 4, label: "Yes" }
    ]
  },
  {
    id: 4,
    text: "Do you believe yourself to be overweight when others say you are too thin?",
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
    text: "Would you say that food dominates your life?",
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
    text: "Do you feel guilty after eating?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  }
];

const getEatingDisorderResult = (score: number): QuizResult => {
  if (score <= 8) {
    return {
      score,
      interpretation: "Your responses suggest minimal eating disorder symptoms.",
      recommendations: [
        "Continue maintaining healthy eating habits",
        "Practice regular self-care",
        "Stay aware of your relationship with food",
        "Maintain a balanced lifestyle"
      ]
    };
  } else if (score <= 15) {
    return {
      score,
      interpretation: "Your responses suggest mild eating disorder symptoms.",
      recommendations: [
        "Consider speaking with our mental health professionals",
        "Start keeping a food and mood journal",
        "Learn about intuitive eating with our nutritionists",
        "Join our body-positive support groups",
        "Practice mindful eating techniques"
      ]
    };
  } else if (score <= 22) {
    return {
      score,
      interpretation: "Your responses suggest moderate eating disorder symptoms.",
      recommendations: [
        "Schedule an evaluation with our eating disorder specialists",
        "Meet with our registered dietitians",
        "Join our eating disorder support groups",
        "Work with our therapists on body image",
        "Develop healthy coping strategies with our team"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your responses suggest significant eating disorder symptoms.",
      recommendations: [
        "Schedule an immediate evaluation with our specialists",
        "Consider our comprehensive treatment programs",
        "Meet with our eating disorder treatment team",
        "Join our structured support groups",
        "Work with our nutritionists and therapists",
        "Remember that recovery is possible with proper support"
      ]
    };
  }
};

const EatingDisorderTest = () => {
  return (
    <Quiz
      title="Eating Disorder Screening Test"
      description="This screening test will help identify potential eating disorder symptoms. Please answer each question honestly. Note: This test is not a diagnosis. If you're struggling with eating or body image issues, our professionals are here to help you."
      questions={eatingDisorderQuestions}
      getResult={getEatingDisorderResult}
    />
  );
};

export default EatingDisorderTest; 