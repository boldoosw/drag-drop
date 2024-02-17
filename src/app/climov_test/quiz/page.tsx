// Utils
import { shuffleArray } from "@/utils/arrayUtils";
// Components
import Quiz from "./Quiz";
// Types
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

import { promises as fs } from "fs";
import { getLocalData } from "@/lib/climov_data";
const TOTAL_QUESTIONS = 20;

const getQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState> => {
  // const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  // console.log(endpoint);
  // const data = await (await fetch(endpoint, { cache: "no-store" })).json();
  const ldata = await getLocalData();

  // console.log("---------------------");
  // console.log(ldata);
  // console.log(quiz);
  // const data =await quiz;

  // return data.results.map((question: Question) => ({
  return ldata.results.map((question: Question) => ({
    ...question,
    answers: [...question.answers],
    // answers: shuffleArray([
    //   ...question.answers,
    //   // question.correct_answer,
    // ]),
  }));
};

const Home = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  // const questions = quiz.results;

  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />;
};

export default Home;
