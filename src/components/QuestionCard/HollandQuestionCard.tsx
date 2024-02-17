// Helpers
import { getBGColor } from "./helpers";
import Image from "next/image";
import logonew from "@/assets/images/logo_mcu.png";

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  answer_val: string[];
  // answer_pic: string[];
  userAnswer: string | undefined;
  // correctAnswer: string;
  onClick: (
    answer: string,
    answer_val: string,
    currentQuestionIndex: number
  ) => void;
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  answer_val,
  // answer_pic,
  userAnswer,
  onClick,
  // correctAnswer,
}) => {
  return (
    <div className=" flex flex-column flex-wrap justify-between">
      <div className=" grid w-full gap-6 md:grid-cols-2">
        {answers.map((answer, i = 0) => (
          <div
            key={answer}
            onClick={() => onClick(answer, answer_val[i], currentQuestionIndex)}
            className={`${getBGColor(userAnswer, answer)}  p-2 cursor-pointer 
            select-none font-bold min-h-[45px] max-w-[400] w-full  rounded-[10px]
              border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  `}
          >
            {/* <Image src="/asdf" width={500} height={200} alt="Зураг" /> */}

            <h5 className="mb-2 text-md tracking-tight text-gray-900 dark:text-white">
              {answer}
            </h5>
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {answer}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
