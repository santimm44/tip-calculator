export const TipButton = ({tips, onClick, percentTrue}) => {

  return (
    <button
    onClick={()=>onClick(tips)}
    className={` ${percentTrue == true? "bg-strongCyan text-veryDarkCyan": "bg-veryDarkCyan text-white"} w-full text-center  rounded-sm hover:bg-strongCyan hover:text-veryDarkCyan`}
    >
      <h2 className="w-full text-[35px]">{tips}%</h2>
    </button>
  );
};
