export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export type Question = {
  category: string;
  // correct_answer: string;
  difficulty: Difficulty;
  answers: Array<string>;
  question_type: string;
  answer_val: Array<string>;
  answer_pic: Array<string>;
  question: string;
  type: string;
};

export type QuestionsState = Array<Question & { answers: Array<string> }>;
