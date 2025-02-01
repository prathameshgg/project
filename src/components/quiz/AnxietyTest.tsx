import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const anxietyQuestions: Question[] = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you not been able to stop or control worrying?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you had trouble relaxing?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you been so restless that it's hard to sit still?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you felt afraid as if something awful might happen?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  }
];

const getAnxietyResult = (score: number): QuizResult => {
  if (score <= 4) {
    return {
      score,
      interpretation: "Your symptoms suggest minimal anxiety.",
      recommendations: [
        "Practice regular mindfulness or meditation",
        "Maintain a healthy sleep schedule",
        "Exercise regularly",
        "Keep a worry diary to track triggers"
      ]
    };
  } else if (score <= 9) {
    return {
      score,
      interpretation: "Your symptoms suggest mild anxiety.",
      recommendations: [
        "Consider talking to a mental health professional",
        "Learn and practice deep breathing exercises",
        "Try progressive muscle relaxation",
        "Limit caffeine and alcohol intake",
        "Establish a regular exercise routine"
      ]
    };
  } else if (score <= 14) {
    return {
      score,
      interpretation: "Your symptoms suggest moderate anxiety.",
      recommendations: [
        "Consult with a mental health professional",
        "Learn about cognitive behavioral therapy techniques",
        "Practice regular relaxation exercises",
        "Consider joining an anxiety support group",
        "Maintain a regular sleep and exercise schedule"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your symptoms suggest severe anxiety.",
      recommendations: [
        "Seek professional help immediately",
        "Contact an anxiety specialist",
        "Consider medication options with your healthcare provider",
        "Learn and practice grounding techniques",
        "Build a support network of trusted friends and family"
      ]
    };
  }
};

const AnxietyTest = () => {
  return (
    <Quiz
      title="Anxiety Screening Test"
      description="This screening test will help determine if you are experiencing symptoms of anxiety. Please answer each question honestly, considering how you've felt over the last 2 weeks."
      questions={anxietyQuestions}
      getResult={getAnxietyResult}
    />
  );
};

export default AnxietyTest; 