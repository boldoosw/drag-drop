import React from "react";

import { Question } from "@/types/quiz";
import { getBGColor, getBGColor1 } from "./helpers";
const { useEffect, useState } = React;
type Props = {
  question: Question;
  currentQuestionIndex: number;
  answerType: string;
  userAnswer: string | undefined;

  onClick: (
    answer: string,
    answer_val: string,
    question_type: string,
    currentQuestionIndex: number,
    div_id: string
  ) => void;
};

const CustomCard: React.FC<Props> = ({
  question,
  currentQuestionIndex,
  answerType,
  userAnswer,
  onClick,
}) => {
  return (
    <div
      id={question.question}
      key={question.question}
      className="md:w-full gap-4 md:grid-cols-2 "
    >
      <div
        id={question.question}
        className="bg-sky-100 flex
        flex-row justify-between items-center cursor-pointer 
            select-none  max-w-[400] w-full  rounded-[10px]
              border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="w-full m-2 ">{question.question}</div>
        <div
          key={
            question.question +
            question.answers[currentQuestionIndex] +
            currentQuestionIndex
          }
          id={
            question.question +
            question.answers[currentQuestionIndex] +
            currentQuestionIndex
          }
        >
          {question.answers.map((answer, i = 0) => (
            <div
              id={question.question + i}
              key={question.question + i}
              onClick={() =>
                onClick(
                  question.answers[i],
                  question.question,
                  question.question_type,
                  currentQuestionIndex,
                  question.question + i
                )
              }
              className={`flex items-center mr-1 rounded `}
            >
              <h5 className=" m-2 text-md tracking-tight text-gray-900 dark:text-white">
                {answer}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
