"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import CustomCard from "@/components/QuestionCard/CustomCard";
import { Question } from "../../../types/quiz";
import { Varela } from "next/font/google";

type Props = {
  questions: QuestionsState;
};

// eslint-disable-next-line react-hooks/rules-of-hooks

const Quiz = ({ questions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );

  const handleOnAnswerClick = (
    answer: string,
    answer_val: string,
    answerType: string,
    currentQuestionIndex: number,
    div_id: string
  ) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));

    userAnswers[currentQuestionIndex] = answer;

    const propertyNames = Object.keys(userAnswers);
    console.log(userAnswers);

    const answer_index = div_id.charAt(div_id.length - 1);

    if (answer_index === "0") {
      var div_id2 = div_id.slice(0, -1) + "1";
      console.log(div_id2);
      let box = document.getElementById(div_id);
      if (box != null) box.style.background = "green";

      let box2 = document.getElementById(div_id2);
      if (box2 != null) box2.style.background = "white";
    }

    if (answer_index === "1") {
      var div_id2 = div_id.slice(0, -1) + "0";
      console.log(div_id2);
      let box = document.getElementById(div_id);
      if (box != null) box.style.background = "red";

      let box2 = document.getElementById(div_id2);
      if (box2 != null) box2.style.background = "white";
    }
  };

  function getChartData(): void {
    throw new Error("Function not implemented.");
  }

  function handleChangeQuestion(arg0: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="text-black text-center mt-8">
        <div className="md:grid grid-cols-2 gap-2">
          {questions.map(function (question, i) {
            return (
              <CustomCard
                // id={question.question + question.answers[i] + i}
                key={question.question + question.answers[i] + i}
                question={question}
                answerType={question.question_type}
                currentQuestionIndex={i}
                userAnswer={userAnswers[currentQuestionIndex]}
                onClick={handleOnAnswerClick}
                // onChange={handleOnAnswerClick}
              />
            );
          })}
        </div>
        <div className="flex  mt-4 ">
          {currentQuestionIndex === 2 ? (
            <Button
              text="Дуусгах"
              btn_next={false}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              // onClick={
              //   currentQuestionIndex === 2
              //     ? () => getChartData()
              //     : () => handleChangeQuestion(1)
              // }
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
