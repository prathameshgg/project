import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const bipolarQuestions: Question[] = [
  {
    id: 1,
    text: "Have you experienced periods of feeling so 'high' or energetic that other people thought you were not your normal self?",
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
    text: "Have you had periods where you felt much more irritable or angry than usual?",
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
    text: "Have you experienced periods of feeling very down or depressed, followed by periods of feeling extremely energetic?",
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
    text: "Have you had periods where you needed much less sleep than usual and still felt energetic?",
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
    text: "Have you experienced periods where your thoughts raced so fast that you couldn't keep up with them?",
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
    text: "Have you had periods where you engaged in risky behavior or made impulsive decisions you later regretted?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Very Often" }
    ]
  }
];

const getBipolarResult = (score: number): QuizResult => {
  if (score <= 8) {
    return {
      score,
      interpretation: "Your responses suggest minimal bipolar traits.",
      recommendations: [
        "Continue monitoring your mood patterns",
        "Maintain regular sleep schedules",
        "Practice stress management techniques",
        "Keep a mood diary to track any changes"
      ]
    };
  } else if (score <= 15) {
    return {
      score,
      interpretation: "Your responses suggest mild bipolar traits.",
      recommendations: [
        "Consider consulting with our mental health professionals",
        "Start keeping a detailed mood journal",
        "Establish consistent daily routines",
        "Learn about bipolar disorder and its symptoms",
        "Practice regular sleep hygiene"
      ]
    };
  } else if (score <= 22) {
    return {
      score,
      interpretation: "Your responses suggest moderate bipolar traits.",
      recommendations: [
        "Schedule an evaluation with our mental health professionals",
        "Maintain a strict sleep schedule",
        "Track your mood, sleep, and activity patterns",
        "Join our support groups for mood management",
        "Build a support network with our community"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your responses suggest significant bipolar traits.",
      recommendations: [
        "Schedule an immediate evaluation with our specialists",
        "Consult with our psychiatrists about treatment options",
        "Establish a crisis plan with our mental health team",
        "Join our bipolar support groups",
        "Work with our therapists on coping strategies",
        "Create a daily routine with professional guidance"
      ]
    };
  }
};

const BipolarTest = () => {
  return (
    <Quiz
      title="Bipolar Disorder Screening Test"
      description="This screening test will help determine if you are experiencing symptoms of Bipolar Disorder. Please answer each question honestly, considering your experiences over the past year. Note: This test is not a diagnosis. If you're concerned about your mental health, our professionals are here to help."
      questions={bipolarQuestions}
      getResult={getBipolarResult}
    />
  );
};

export default BipolarTest; 