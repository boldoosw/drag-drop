// Utils
import { shuffleArray } from "@/utils/arrayUtils";
// Components
import Quiz from "./Quiz";
// Types
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

import { promises as fs } from "fs";
import { getLocalData } from "@/lib/holland_data";
const TOTAL_QUESTIONS = 42;

const getQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState> => {
  const ldata = await getLocalData();

  return ldata.results.map((question: Question) => ({
    ...question,
    answers: [...question.answers],
  }));
};

const Home = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  // const questions = quiz.results;

  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default Home;
