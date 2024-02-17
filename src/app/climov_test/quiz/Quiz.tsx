"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Components
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import VulnChart from "@/components/VulnChart/VulnChart";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};
let chartData: number[] = [];
const Quiz = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  const [isQuestionAnswered, setIsQuestionAnswered] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<
    Record<number, string>
  >({});

  const router = useRouter();

  const handleOnAnswerClick = (
    answer: string,
    answer_val: string,
    currentQuestionIndex: number
  ) => {
    // If user has already answered, do nothing
    // if (isQuestionAnswered) return;
    // Check answer against correct answer
    // const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    const answer_value = questions[currentQuestionIndex].answer_val;
    // Add score if answer is correct
    // if (isCorrect) setScore((prev) => prev + 1);
    // Save the answer in the object for user answers
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setIsQuestionAnswered(true);

    userAnswers[currentQuestionIndex] = answer;
    selectedAnswer[currentQuestionIndex] = answer_val;

    console.log(userAnswers);
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;

    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setIsQuestionAnswered(false);
    setCurrentQuestionIndex(newQuestionIndex);
  };
  const getChartData = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      let people_count: number = 0;
      let technical_count: number = 0;
      let culture_count: number = 0;
      let character_count: number = 0;
      let ecology_count: number = 0;

      const answerValues = Object.values(selectedAnswer);
      answerValues.map((x: any): void => {
        if (x === "Хүн") people_count++;
        if (x === "Байгаль") ecology_count++;
        if (x === "Тэмдэгт") character_count++;
        if (x === "Техник") technical_count++;
        if (x === "Урлаг") culture_count++;
      });
      chartData.push(people_count);
      chartData.push(culture_count);
      chartData.push(technical_count);
      chartData.push(ecology_count);
      chartData.push(character_count);

      setShowResult(true);
      console.log(chartData);
    }
  };

  return !showResult ? (
    <div className="text-black text-center mt-8">
      <p className="p-8 font-bold text-[20px]"> {chartData}</p>
      <p className="text-[#9F50AC] font-bold pb-2 text-[14px]">
        Question {currentQuestionIndex + 1} out of {totalQuestions}
      </p>
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        answer_val={questions[currentQuestionIndex].answer_val}
        answer_pic={questions[currentQuestionIndex].answer_pic}
        userAnswer={userAnswers[currentQuestionIndex]}
        // correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <div className="flex justify-between mt-16 ">
        <Button
          text="Өмнөх"
          btn_next={false}
          onClick={() => handleChangeQuestion(-1)}
        />

        <Button
          text={
            currentQuestionIndex === totalQuestions - 1 ? "Дуусгах" : "Дараах"
          }
          btn_next={
            selectedAnswer[currentQuestionIndex] === undefined ||
            selectedAnswer[currentQuestionIndex] === null
              ? true
              : false
          }
          onClick={
            currentQuestionIndex === totalQuestions - 1
              ? () => getChartData()
              : // () => router.push("/")
                () => handleChangeQuestion(1)
          }
        />
      </div>
    </div>
  ) : (
    <div className="text-black text-center mt-8">
      <VulnChart
        labels={["Хүн", "Урлаг", "Техник", "Байгаль", "Тэмдэгт"]}
        // data={[5, 3, 5, 4, 3]}
        data={chartData}
      />
    </div>
  );
};

export default Quiz;

// <div className="text-black text-center mt-8">
//   {" "}
//   {chartData}
//   {/* <p className="p-8 font-bold text-[20px]">Score: {score}</p> */}
//   <VulnChart
//     labels={["Хүн", "Урлаг", "Техник", "Байгаль", "Тэмдэгт"]}
//     data={[5, 3, 5, 4, 3]}
//     // data={chartData}
//   />
// </div>;
