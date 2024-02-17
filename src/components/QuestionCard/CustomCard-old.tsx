import React from "react";

import { Question } from "@/types/quiz";
import { getBGColor, getBGColor1 } from "./helpers";
const { useEffect, useState } = React;
type Props = {
  question: Question;
  currentQuestionIndex: number;
  answerType: string;
  userAnswer: string | undefined;
  onChange: (
    answer: string,
    answer_val: string,
    question_type: string,
    currentQuestionIndex: number
  ) => void;
};

const CustomCard: React.FC<Props> = ({
  question,
  currentQuestionIndex,
  answerType,
  userAnswer,
  onChange,
}) => {
  return (
    <div className="md:w-full gap-6 md:grid-cols-2 m-2">
      <div
        className="bg-sky-100 flex
        flex-row justify-between items-center cursor-pointer 
            select-none  max-w-[400] w-full  rounded-[10px]
              border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="w-full m-2 ">
          {question.question}
          {userAnswer}
        </div>
        <div
          key={question.question + currentQuestionIndex}
          id={question.question + currentQuestionIndex}
        >
          <ul className="w-full  mr-2 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {question.answers.map((answer, i = 0) => (
              <>
                {" "}
                <li>
                  <div className="flex items-center ps-3  mr-1  rounded">
                    <input
                      id={question.question + question.answers[i]}
                      key={question.question + question.answers[i]}
                      type="radio"
                      name={question.question}
                      onChange={() =>
                        onChange(
                          question.answers[i],
                          question.question,
                          question.question_type,
                          currentQuestionIndex
                        )
                      }
                    />
                    <label
                      htmlFor={question.question + question.answers[i]}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {question.answers[i]}
                    </label>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
