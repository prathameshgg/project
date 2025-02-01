import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const depressionQuestions: Question[] = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you been feeling down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you been feeling tired or having little energy?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you had poor appetite or been overeating?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  }
];

const getDepressionResult = (score: number): QuizResult => {
  if (score <= 4) {
    return {
      score,
      interpretation: "Your symptoms suggest minimal depression.",
      recommendations: [
        "Continue monitoring your mood",
        "Maintain healthy lifestyle habits",
        "Practice regular self-care",
        "Stay connected with friends and family"
      ]
    };
  } else if (score <= 9) {
    return {
      score,
      interpretation: "Your symptoms suggest mild depression.",
      recommendations: [
        "Consider talking to a mental health professional",
        "Practice stress-reduction techniques",
        "Maintain regular sleep schedule",
        "Exercise regularly",
        "Reach out to friends and family for support"
      ]
    };
  } else if (score <= 14) {
    return {
      score,
      interpretation: "Your symptoms suggest moderate depression.",
      recommendations: [
        "Strongly consider consulting a mental health professional",
        "Talk to your doctor about treatment options",
        "Establish a daily routine",
        "Practice self-care activities",
        "Stay connected with supportive people"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your symptoms suggest moderately severe to severe depression.",
      recommendations: [
        "Seek professional help immediately",
        "Contact a mental health crisis hotline if needed",
        "Talk to your doctor about treatment options",
        "Don't hesitate to reach out to trusted friends or family",
        "Remember that depression is treatable and recovery is possible"
      ]
    };
  }
};

const DepressionTest = () => {
  return (
    <Quiz
      title="Depression Screening Test"
      description="This screening test will help determine if you are experiencing symptoms of depression. Please answer each question honestly, considering how you've felt over the last 2 weeks."
      questions={depressionQuestions}
      getResult={getDepressionResult}
    />
  );
};

export default DepressionTest; 