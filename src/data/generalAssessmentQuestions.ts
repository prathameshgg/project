export interface Question {
  id: number;
  text: string;
  category: 'depression' | 'anxiety' | 'stress' | 'bipolar' | 'general';
  weight: {
    depression: number;
    anxiety: number;
    stress: number;
    bipolar: number;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    text: "How often do you feel sad or down?",
    category: "depression",
    weight: { depression: 3, anxiety: 1, stress: 1, bipolar: 2 }
  },
  {
    id: 2,
    text: "How frequently do you feel nervous or anxious?",
    category: "anxiety",
    weight: { depression: 1, anxiety: 3, stress: 2, bipolar: 1 }
  },
  {
    id: 3,
    text: "Do you experience sudden mood swings?",
    category: "bipolar",
    weight: { depression: 2, anxiety: 1, stress: 1, bipolar: 3 }
  },
  {
    id: 4,
    text: "How often do you have trouble sleeping?",
    category: "general",
    weight: { depression: 2, anxiety: 2, stress: 2, bipolar: 2 }
  },
  {
    id: 5,
    text: "Do you feel overwhelmed by daily tasks?",
    category: "stress",
    weight: { depression: 1, anxiety: 2, stress: 3, bipolar: 1 }
  },
  {
    id: 6,
    text: "Have you lost interest in activities you used to enjoy?",
    category: "depression",
    weight: { depression: 3, anxiety: 1, stress: 1, bipolar: 2 }
  },
  {
    id: 7,
    text: "Do you experience racing thoughts?",
    category: "anxiety",
    weight: { depression: 1, anxiety: 3, stress: 2, bipolar: 2 }
  },
  {
    id: 8,
    text: "How often do you feel restless or on edge?",
    category: "anxiety",
    weight: { depression: 1, anxiety: 3, stress: 2, bipolar: 1 }
  },
  {
    id: 9,
    text: "Do you experience periods of unusually high energy?",
    category: "bipolar",
    weight: { depression: 0, anxiety: 1, stress: 1, bipolar: 3 }
  },
  {
    id: 10,
    text: "How often do you feel worthless or guilty?",
    category: "depression",
    weight: { depression: 3, anxiety: 1, stress: 1, bipolar: 1 }
  },
  {
    id: 11,
    text: "Do you have difficulty concentrating?",
    category: "general",
    weight: { depression: 2, anxiety: 2, stress: 2, bipolar: 2 }
  },
  {
    id: 12,
    text: "How often do you feel irritable?",
    category: "stress",
    weight: { depression: 1, anxiety: 1, stress: 3, bipolar: 2 }
  },
  {
    id: 13,
    text: "Do you experience physical symptoms like headaches or stomach aches?",
    category: "stress",
    weight: { depression: 1, anxiety: 2, stress: 3, bipolar: 1 }
  },
  {
    id: 14,
    text: "How often do you feel hopeless about the future?",
    category: "depression",
    weight: { depression: 3, anxiety: 1, stress: 1, bipolar: 1 }
  },
  {
    id: 15,
    text: "Do you experience panic attacks?",
    category: "anxiety",
    weight: { depression: 1, anxiety: 3, stress: 2, bipolar: 1 }
  },
  {
    id: 16,
    text: "How often do you feel disconnected from reality?",
    category: "general",
    weight: { depression: 2, anxiety: 2, stress: 1, bipolar: 2 }
  },
  {
    id: 17,
    text: "Do you engage in risky or impulsive behavior?",
    category: "bipolar",
    weight: { depression: 1, anxiety: 1, stress: 1, bipolar: 3 }
  },
  {
    id: 18,
    text: "How often do you have thoughts of self-harm?",
    category: "depression",
    weight: { depression: 3, anxiety: 1, stress: 1, bipolar: 2 }
  },
  {
    id: 19,
    text: "Do you avoid social situations due to fear or anxiety?",
    category: "anxiety",
    weight: { depression: 1, anxiety: 3, stress: 1, bipolar: 1 }
  },
  {
    id: 20,
    text: "How often do you feel physically and emotionally exhausted?",
    category: "stress",
    weight: { depression: 2, anxiety: 1, stress: 3, bipolar: 1 }
  }
];

export const answerOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Always" }
]; 