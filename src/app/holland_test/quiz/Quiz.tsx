"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Components
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import VulnChart from "@/components/VulnChart/HollandVulnChart";
import HollandQuestionCard from "@/components/QuestionCard/HollandQuestionCard";

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
    const answer_value = questions[currentQuestionIndex].answer_val;

    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setIsQuestionAnswered(true);

    userAnswers[currentQuestionIndex] = answer;
    selectedAnswer[currentQuestionIndex] = answer_val;
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setIsQuestionAnswered(false);
    setCurrentQuestionIndex(newQuestionIndex);
  };
  const getChartData = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      let bodit_ua_count: number = 0;
      let shinjeech_count: number = 0;
      let urlag_count: number = 0;
      let niigem_count: number = 0;
      let udirdah_count: number = 0;
      let standart_count: number = 0;

      const answerValues = Object.values(selectedAnswer);
      answerValues.map((x: any): void => {
        if (x === "1") bodit_ua_count++;
        if (x === "2") shinjeech_count++;
        if (x === "3") urlag_count++;
        if (x === "4") niigem_count++;
        if (x === "5") udirdah_count++;
        if (x === "6") standart_count++;
      });
      chartData.push(bodit_ua_count);
      chartData.push(shinjeech_count);
      chartData.push(urlag_count);
      chartData.push(niigem_count);
      chartData.push(udirdah_count);
      chartData.push(standart_count);

      setShowResult(true);
      console.log(chartData);
    }
  };
  return !showResult ? (
    <div className="text-black text-center mt-8">
      <div className="bg-[#7030a0] text-white text-center  p-4 text-[14px] mt-8 w-full">
        Хамгийн их сонирхдог мэргэжлээ сонго. Таны сонгосон мэргэжил өөрийн тань
        мэргэжлийн хэв шинжид нийцэж байгаа эсэхээс тухайн мэргэжилдээ гаргах
        амжилт ихээхэн шалтгаална. Энэхүү тест нь таны мэргэжлийн тэр төрлийг
        тодорхойлоход тусална. 42 хос мэргэжлээс өөрт тань таалагдах нэгийг
        сонгоно уу.
      </div>
      <p className="text-[#9F50AC] font-bold pb-2 text-[14px]">
        Асуулт {currentQuestionIndex + 1} / {totalQuestions}
      </p>
      <HollandQuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        answer_val={questions[currentQuestionIndex].answer_val}
        // answer_pic={questions[currentQuestionIndex].answer_pic}
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
        labels={[
          "Бодит үйл ажиллагааг дэмжигч",
          "Шинжээч судлаач",
          "Урлагын",
          "Нийгмийн",
          "Удирдан зохион байгуулах",
          "Стандартыг баримтлагч",
        ]}
        data={chartData}
      />
    </div>
  );
};

export default Quiz;
