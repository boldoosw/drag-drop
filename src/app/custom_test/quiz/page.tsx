// Utils
import { shuffleArray } from "@/utils/arrayUtils";
// Components
import Quiz from "./Quiz";
// Types
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

import { getLocalData } from "@/lib/custom_data";

const getQuestions = async (): Promise<QuestionsState> => {
  const ldata = await getLocalData();

  return ldata.results.map((question: Question) => ({
    ...question,
  }));
};

const Home = async () => {
  const questions = await getQuestions();

  return <Quiz questions={questions} />;
};

export default Home;
