import next from "next";

type Props = {
  text: string;
  btn_next: boolean;
  onClick: () => void;
};

const Button = ({ text, btn_next, onClick }: Props) => {
  return (
    <button
      // className="bg-[#9F50AC] select-none font-bold h-35px[] min-w-[120px] rounded-[10px] text-white"
      className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue700"
      onClick={onClick}
      disabled={btn_next}
    >
      {text}
    </button>
  );
};

export default Button;
