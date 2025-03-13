
import React, { useState } from "react";

export const TipButton = ({tips, onClick}) => {
  
  return (
    <button
    onClick={()=>onClick(tips)}
    className="bg-veryDarkCyan  w-full text-center text-white rounded-sm hover:bg-strongCyan hover:text-veryDarkCyan"
    >
      <h2 className="w-full ">{tips}%</h2>
    </button>
  );
};

// const [tipPercentage, setTipPercentage] = useState();
// const handleTips = () => {
//   setTipPercentage(props.tips);
// };
// console.log(tipPercentage);