import React from "react";

import { useEffect, useState } from "react";
import { dataButtons } from "../data/dataButtons";
import ButtonC from "./Button";
import LabelInput from "./Label";

const Calculator = () => {
  const [solution, setSolution] = useState("");
  const [text, setText] = useState("");
  const [sw, setSw] = useState(0);

  

  const showInput = (id) => {
    if (text.length == 0 || solution.length > 0) {
      if ((id >= "0" && id <= "9") || id == "-") {
        setText(id);
        setSolution("");
      }
    } else {
      const last = text[text.length - 1];
      if (
        ((id == "+" || id == "-" || id == "x" || id == "/" || id == ".") &&
          last >= "0" &&
          last <= "9") ||
        (id >= "0" &&
          id <= "9" &&
          (last == "+" ||
            last == "-" ||
            last == "x" ||
            last == "/" ||
            last == ".")) ||
        (last >= "0" && last <= "9" && id >= "0" && id <= "9")
      ) {
        setText(text + id);
      }
    }
  };

  const solveInput = (problem) => {
    const pr = problem.replace("x", "*");
    const newPr = pr.replace(/\d*(\.\d+)?/g, (n) => n && +n);
    if (problem.length > 0) {
      setSolution(String(eval(newPr)));
    }
  };

  const sendType = (id) => {
    if (id != "=") {
      showInput(id);
    } else {
      const last = text[text.length - 1];
      if (last != "+" && last != "-" && last != "x" && last != "/") {
        solveInput(text);
      }
    }
  };

  return (
    <div id="div1" className="bg-slate-200 p-10 h-auto w-auto  flex justify-center align-middle items-center flex-row shadow-sm shadow-slate-400">
      <div id="div2" className="bg-rose-300 p-10 rounded-2xl shadow-md shadow-slate-700 border-rose-200 border-2">
        <div id="div3"className="grid grid-rows-2 gap-y-5 p-y-5 mb-5">
          <LabelInput text={text} sw={1} />
          <LabelInput solved={solution} sw={0} />
        </div>

        <div className="grid grid-cols-4 gap-5 font-medium text-2xl">
          {dataButtons.map((id) => (
            <ButtonC key={id} name={id} sendType={(id) => sendType(id)} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
