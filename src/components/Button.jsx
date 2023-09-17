import React from "react";

const ButtonC = ({ name, sendType }) => {
  return (
    <button
      id = {name}
      onClick={() => sendType(name)}
      type="button"
      className={
        name >= "0" && name <= "9"
          ? "bg-slate-200  hover:shadow-sm shadow-md  shadow-slate-800 p-6 rounded-2xl"
          : "bg-rose-200  hover:shadow-sm shadow-md  shadow-slate-800 rounded-2xl"
      }
    >
      {name}
    </button>
  );
};

export default ButtonC;
