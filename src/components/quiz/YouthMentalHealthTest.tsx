import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const youthQuestions: Question[] = [
  {
    id: 1,
    text: "How often do you feel overwhelmed by school, work, or social pressures?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Almost always" }
    ]
  },
  {
    id: 2,
    text: "How often do you feel like you don't fit in or belong?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Almost always" }
    ]
  },
  {
    id: 3,
    text: "How often do you have trouble sleeping or feel tired even after sleeping?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Almost always" }
    ]
  },
  {
    id: 4,
    text: "How often do you feel anxious about your future or life decisions?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Almost always" }
    ]
  },
  {
    id: 5,
    text: "How often do you feel down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Almost always" }
    ]
  },
  {
    id: 6,
    text: "How often do you feel pressure to look or act a certain way on social media?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Almost always" }
    ]
  }
];

const getYouthResult = (score: number): QuizResult => {
  if (score <= 6) {
    return {
      score,
      interpretation: "Your responses suggest you're managing well overall.",
      recommendations: [
        "Keep practicing self-care and healthy habits",
        "Stay connected with friends and family",
        "Consider joining our youth community groups",
        "Remember our team is here if you need support"
      ]
    };
  } else if (score <= 12) {
    return {
      score,
      interpretation: "Your responses suggest you might be experiencing some challenges.",
      recommendations: [
        "Talk to our youth counselors about how you're feeling",
        "Join our teen support groups",
        "Learn stress management techniques with our team",
        "Consider our mindfulness programs for young people",
        "Take regular breaks from social media"
      ]
    };
  } else if (score <= 15) {
    return {
      score,
      interpretation: "Your responses suggest you're facing significant challenges.",
      recommendations: [
        "Schedule a session with our youth mental health specialists",
        "Join our teen therapy groups",
        "Work with our counselors on coping strategies",
        "Participate in our youth support programs",
        "Connect with peers in our supervised groups"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your responses suggest you need additional support right now.",
      recommendations: [
        "Schedule an immediate consultation with our youth specialists",
        "Join our intensive support programs",
        "Work with our crisis intervention team if needed",
        "Participate in our structured youth groups",
        "Connect with our peer support network",
        "Remember you're not alone - we're here to help"
      ]
    };
  }
};

const YouthMentalHealthTest = () => {
  return (
    <Quiz
      title="Youth Mental Health Test"
      description="This test is designed specifically for teens and young adults to help you understand your mental health. Your answers are private. If you're having thoughts of self-harm, please reach out to our crisis team or a trusted adult immediately - we're here to help."
      questions={youthQuestions}
      getResult={getYouthResult}
    />
  );
};

export default YouthMentalHealthTest; 