import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const adhdQuestions: Question[] = [
  {
    id: 1,
    text: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
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
    text: "How often do you have problems remembering appointments or obligations?",
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
    text: "How often do you have difficulty focusing on what people say to you, even when they are speaking directly to you?",
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
    text: "How often do you have difficulty staying focused during lectures, conversations, or lengthy readings?",
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
    text: "How often do you fidget or squirm when you have to sit down for a long time?",
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
    text: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  }
];

const getADHDResult = (score: number): QuizResult => {
  if (score <= 8) {
    return {
      score,
      interpretation: "Your responses suggest minimal ADHD traits.",
      recommendations: [
        "Continue using existing organizational strategies",
        "Maintain regular routines",
        "Practice mindfulness techniques",
        "Consider regular exercise to help with focus"
      ]
    };
  } else if (score <= 15) {
    return {
      score,
      interpretation: "Your responses suggest mild ADHD traits.",
      recommendations: [
        "Consider consulting with our mental health professionals",
        "Try implementing organizational tools and planners",
        "Establish structured daily routines",
        "Practice time-management techniques",
        "Minimize distractions in your environment"
      ]
    };
  } else if (score <= 22) {
    return {
      score,
      interpretation: "Your responses suggest moderate ADHD traits.",
      recommendations: [
        "Strongly consider evaluation by our mental health professionals",
        "Implement comprehensive organizational systems",
        "Create structured environments for work/study",
        "Consider ADHD coaching or cognitive behavioral therapy",
        "Learn about ADHD management strategies"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your responses suggest significant ADHD traits.",
      recommendations: [
        "Schedule an evaluation with our ADHD specialists",
        "Consult with our mental health professionals about treatment options",
        "Consider both behavioral strategies and medical interventions",
        "Join our ADHD support groups or communities",
        "Work with our ADHD coaches or therapists",
        "Develop personalized coping strategies"
      ]
    };
  }
};

const ADHDTest = () => {
  return (
    <Quiz
      title="ADHD Screening Test"
      description="This screening test will help determine if you are experiencing symptoms of Attention-Deficit/Hyperactivity Disorder (ADHD). Please answer each question honestly, considering how you've typically felt and behaved over the past six months."
      questions={adhdQuestions}
      getResult={getADHDResult}
    />
  );
};

export default ADHDTest; 