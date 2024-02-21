export const getBGColor = (userAnswer: string | undefined,  answer: string): string => {
  // const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;

  // if ((isAnswerCorrect === true && answer === userAnswer) || (isAnswerCorrect === false && answer === correctAnswer))
    if (answer === userAnswer)
    return 'bg-sky-500 text-white dark:bg-sky-500 ';

  // if (isAnswerCorrect === false && answer === userAnswer) return 'bg-[#AC5050] text-white';

  return 'bg-white text-[#9F50AC]';
  // return 'bg-sky-500 text-white dark:text-white dark:bg-sky-500';
};

export const getBGColor1 = (isSelected:boolean): string => {
 
    if (isSelected ===true)
    {
      return 'bg-green-500 text-white';
}


  return 'bg-white text-[#9F50AC]';
};