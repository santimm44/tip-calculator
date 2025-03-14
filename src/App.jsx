import { useEffect, useState } from "react";
import dollarSign from "./assets/images/icon-dollar.svg";
import personIcon from "./assets/images/icon-person.svg";
import logo from "./assets/images/logo.svg";
import "./App.css";
import { TipOptions } from "./interface/interface";
import { TipButton } from "./components/TipButton";

function App() {
  const [total, setTotal] = useState();
  const [partySize, setPartySize] = useState();
  const [tipAmount, setTipAmount] = useState("0.00");
  const [tipPercentage, setTipPercentage] = useState();
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [isDirty, setIsDirty]=useState(false);

  useEffect(() => {
    if (total > 0 && partySize > 0 && tipPercentage > 0) {
      tipAmountPerPerson();
    }
  }, [total, partySize, tipPercentage]);

  useEffect(() => {
    totalAmountPerPerson();
  }, [tipAmount]);

  const tipAmountPerPerson = () => {
    let num1 = Math.round(total * (tipPercentage * 0.01) * 100) / 100;
    let num2 = Math.floor((num1 / partySize) * 100) / 100;
    setTipAmount(num2.toFixed(2).toString());
  };

  const totalAmountPerPerson = () => {
    if (total != undefined && partySize != undefined) {
      let tipNum = parseFloat(tipAmount);
      tipNum = Math.round(tipNum * 100) / 100;
      let partyTotal = Math.round((total / partySize) * 100) / 100;

      let totalPerPersonNum = partyTotal + tipNum;
      setTotalPerPerson(totalPerPersonNum.toFixed(2).toString());
    }
  };
  const handleInputChange = (event) => {
    setTotal(parseFloat(event.target.value));
  };

  const handleTips = (selectedTip) => {
    console.log(selectedTip)
    if(selectedTip.type=="change"){
      setTipPercentage(selectedTip.target.value)
      setIsDirty(true)
    }else{
      setTipPercentage(selectedTip);
      setIsDirty(false)
    }
  };

  const handlePartSize = (event) => {
    setPartySize(parseInt(event.target.value));
    
  };

  const resetBtn = () => {
    console.log("ResetBTN working");
    setTotal("");
    setPartySize(1);
    setTipAmount("0.00");
    setIsDirty(false)
    setTipPercentage(0);
    setTotalPerPerson("0.00");
  };

  return (
    <>
      <div className="space-mono-bold h-screen w-full overflow-auto max-375:justify-end bg-lightGrayishCyan flex flex-col justify-around items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="bg-white flex max-375:flex-col max-375:items-center justify-between w-[70vw] max-375:w-screen h-[55vh] max-375:h-4/5 rounded-2xl  max-375px:rounded-b-none overflow-hidden p-5">
          <div className="w-[45%] max-375:w-full flex flex-col justify-between max-375:h-1/2">
            <div className="max-375:w-full">
              <h2 className="text-grayishCyan text-[10px]">Bill</h2>
              <div className="flex bg-verylightGrayishCyan p-[0rem_.5rem] hover:border-strongCyan border-2 border-transparent rounded-md items-center">
                <img className="w-1/12" src={dollarSign} />
                <input
                  className="w-11/12 h-full bg-transparent text-veryDarkCyan text-[24px] text-right"
                  type="number"
                  name="Bill"
                  value={total}
                  onChange={handleInputChange}
                  placeholder="0"
                  min={0}
                  step={0.01}
                  required
                />
              </div>
            </div>
            <div className="max-375:w-full">
              <h2 className="text-grayishCyan text-[10px]">Select Tip</h2>
              <div className="grid grid-cols-3 max-375:grid-cols-2 gap-2">
                {Object.values(TipOptions).map((tipValues, ind) => {
                  return (
                    <div>
                      <TipButton
                        onClick={handleTips}
                        key={ind}
                        tips={tipValues}
                      ></TipButton>
                    </div>
                  );
                })}
                <input
                  className="w-full text-[11px] h-full bg-verylightGrayishCyan text-veryDarkCyan text-center"
                  type="number"
                  name="custom"
                  value={isDirty==true? tipPercentage:""}
                  onChange={handleTips}
                  placeholder="Custom"
                  min={1}
                  step={1}
                  required
                />
              </div>
            </div>
            <div className="max-375:w-full">
              <div className="flex justify-between">
              <h2 className={`text-grayishCyan text-[10px] `}>Number of People</h2>
              <h2 className={`${partySize==0? null:"hidden"} text-[10px] text-red-500`}>Can't be Zero</h2>
              </div>
              <div className={`flex bg-verylightGrayishCyan ${(partySize==0) ? "border-red-500": "hover:border-strongCyan"} p-[0rem_.5rem] rounded-md border-transparent border-2 items-center`}>
                <img className="w-1/12 " src={personIcon} />
                <input
                  className={`w-11/12 h-full bg-transparent  text-veryDarkCyan text-right text-[24px]`}
                  type="number"
                  name="People"
                  value={partySize}
                  onChange={handlePartSize}
                  placeholder="0"
                  min={0}
                  step={1}
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-veryDarkCyan rounded-2xl flex flex-col p-3 justify-between items-center w-[45%] max-375:w-full max-375:h-2/5">
            <div className="w-full flex max-665:h-full flex-col justify-around h-1/2">
              <div className="flex w-full max-665:flex-col  justify-between items-center">
                <div>
                  <h3 className="text-white text-[10px]">Tip Amount</h3>
                  <h4 className="text-darkGrayishCyan text-[10px]">/ person</h4>
                </div>
                <div>
                  <h2 className="text-[24px] text-strongCyan break-all">
                    ${tipAmount}
                  </h2>
                </div>
              </div>
              <div className="flex w-full max-665:flex-col justify-between items-center">
                <div>
                  <h3 className="text-white text-[10px]">Total</h3>
                  <h4 className="text-darkGrayishCyan text-[10px]">/ person</h4>
                </div>
                <div className="">
                  <h2 className="text-[24px] text-strongCyan max-665:text-[24px] break-all">
                    ${totalPerPerson}
                  </h2>
                </div>
              </div>
            </div>

            <div className="border-transparent bg-strongCyan hover:bg-lightGrayishCyan border-2 w-full text-center rounded-sm">
              <button
                onClick={resetBtn}
                className="text-[14px] text-veryDarkCyan"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
