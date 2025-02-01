import React from 'react';
import Quiz from '../common/Quiz';
import { Question, QuizResult } from '../../types/quiz';
import '../../styles/Quiz.css';

const parentQuestions: Question[] = [
  {
    id: 1,
    text: "Has your child been feeling sad, hopeless, or irritable for an extended period?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    text: "Has your child shown significant changes in eating or sleeping patterns?",
    options: [
      { value: 0, label: "No change" },
      { value: 1, label: "Slight change" },
      { value: 2, label: "Moderate change" },
      { value: 3, label: "Significant change" }
    ]
  },
  {
    id: 3,
    text: "Has your child been having trouble concentrating or performing at school?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Some difficulty" },
      { value: 2, label: "Moderate difficulty" },
      { value: 3, label: "Severe difficulty" }
    ]
  },
  {
    id: 4,
    text: "Has your child withdrawn from friends, family, or previously enjoyed activities?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Somewhat" },
      { value: 2, label: "Considerably" },
      { value: 3, label: "Very much" }
    ]
  },
  {
    id: 5,
    text: "Has your child expressed thoughts of self-harm or seemed unusually preoccupied with death?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" }
    ]
  },
  {
    id: 6,
    text: "Has your child shown excessive worry or anxiety about daily activities?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Mildly" },
      { value: 2, label: "Moderately" },
      { value: 3, label: "Severely" }
    ]
  }
];

const getParentResult = (score: number): QuizResult => {
  if (score <= 6) {
    return {
      score,
      interpretation: "Your responses suggest your child is experiencing minimal mental health concerns.",
      recommendations: [
        "Continue monitoring your child's emotional well-being",
        "Maintain open communication with your child",
        "Encourage healthy activities and relationships",
        "Consider regular check-ins with our family counselors"
      ]
    };
  } else if (score <= 12) {
    return {
      score,
      interpretation: "Your responses suggest your child may be experiencing mild mental health challenges.",
      recommendations: [
        "Schedule a consultation with our child mental health specialists",
        "Join our parent support groups",
        "Learn about our family therapy options",
        "Work with our team to develop supportive strategies",
        "Maintain consistent routines with professional guidance"
      ]
    };
  } else if (score <= 15) {
    return {
      score,
      interpretation: "Your responses suggest your child may be experiencing moderate mental health challenges.",
      recommendations: [
        "Schedule an evaluation with our child mental health professionals",
        "Explore our family counseling programs",
        "Join our parent-child therapy sessions",
        "Work with our specialists on communication strategies",
        "Participate in our family support groups"
      ]
    };
  } else {
    return {
      score,
      interpretation: "Your responses suggest your child may be experiencing significant mental health challenges.",
      recommendations: [
        "Schedule an immediate evaluation with our child specialists",
        "Consider our comprehensive family treatment programs",
        "Work with our crisis intervention team if needed",
        "Join our intensive family support programs",
        "Develop a safety plan with our mental health team",
        "Remember that help and support are available"
      ]
    };
  }
};

const ParentTest = () => {
  return (
    <Quiz
      title="Parent Test: Child Mental Health Assessment"
      description="This screening test will help assess your child's mental health and emotional well-being. Please answer each question based on your observations of your child's behavior over the past month. Note: This test is not a diagnosis. Our child mental health professionals are here to help."
      questions={parentQuestions}
      getResult={getParentResult}
    />
  );
};

export default ParentTest; 