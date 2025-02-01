import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const ptsdQuestions: Question[] = [
  {
    id: 1,
    text: "In the past month, how often have you had repeated, disturbing memories, thoughts, or images of a stressful experience?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  },
  {
    id: 2,
    text: "In the past month, how often have you had repeated, disturbing dreams of a stressful experience?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  },
  {
    id: 3,
    text: "In the past month, how often have you suddenly acted or felt as if a stressful experience were happening again (as if you were reliving it)?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  },
  {
    id: 4,
    text: "In the past month, how often have you felt very upset when something reminded you of a stressful experience?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  },
  {
    id: 5,
    text: "In the past month, how often have you avoided activities or situations because they reminded you of a stressful experience?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  },
  {
    id: 6,
    text: "In the past month, how often have you had trouble remembering important parts of a stressful experience?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  },
  {
    id: 7,
    text: "In the past month, how often have you had difficulty falling or staying asleep?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "A little bit" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Quite a bit" },
      { value: 4, label: "Extremely" }
    ]
  }
];

const getPTSDResult = (score: number): QuizResult => {
  if (score <= 8) {
    return {
      score,
      interpretation: "Your symptoms suggest minimal PTSD symptoms.",
      recommendations: [
        "Continue monitoring your symptoms",
        "Practice regular self-care activities",
        "Maintain a support network",
        "Consider preventive counseling if you've experienced trauma"
      ]
    };
  } else if (score <= 14) {
    return {
      score,
      interpretation: "Your symptoms suggest mild PTSD symptoms.",
      recommendations: [
        "Consider speaking with a trauma-informed therapist",
        "Learn and practice grounding techniques",
        "Establish a regular sleep routine",
        "Join a support group for trauma survivors",
        "Practice stress-management techniques"
      ]
    };
  } else if (score <= 21) {
    return {
      score,
      interpretation: "Your symptoms suggest moderate PTSD symptoms.",
      recommendations: [
        "Strongly consider consulting a trauma specialist",
        "Learn about trauma-focused therapy options",
        "Practice relaxation and grounding exercises daily",
        "Build a strong support system",
        "Consider joining a PTSD support group"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your symptoms suggest severe PTSD symptoms.",
      recommendations: [
        "Seek professional help immediately",
        "Contact a trauma specialist or PTSD expert",
        "Consider trauma-focused therapy options",
        "Reach out to a crisis helpline if needed",
        "Connect with PTSD support organizations",
        "Remember that recovery is possible with proper treatment"
      ]
    };
  }
};

const PTSDTest = () => {
  return (
    <Quiz
      title="PTSD Screening Test"
      description="This screening test will help determine if you are experiencing symptoms of Post-Traumatic Stress Disorder (PTSD). Please answer each question honestly, considering how you've felt over the past month. Note: This test is not a diagnosis. If you've experienced trauma, please seek professional help."
      questions={ptsdQuestions}
      getResult={getPTSDResult}
    />
  );
};

export default PTSDTest; 