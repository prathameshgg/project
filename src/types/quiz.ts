export interface Question {
  id: number;
  text: string;
  options: {
    value: number;
    label: string;
  }[];
}

export interface QuizResult {
  score: number;
  interpretation: string;
  recommendations: string[];
}

export interface QuizProps {
  title: string;
  description: string;
  questions: Question[];
  getResult: (score: number) => QuizResult;
} 