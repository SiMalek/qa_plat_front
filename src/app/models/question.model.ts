export interface Question {
    id: number;
    theme: string;
    subTheme: string;
    category: string;
    questionText: string;
    answerText: string;
    flagged: boolean;
    duplicate: boolean;
  }