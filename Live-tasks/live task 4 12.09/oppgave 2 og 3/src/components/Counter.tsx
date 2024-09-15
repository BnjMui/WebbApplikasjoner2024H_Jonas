import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const handleClick = (e: string) => {
    switch (e) {
      case "+":
        setValue(value + 1);
        break;
      case "-":
        setValue(value - 1);
        break;
      default:
        setValue(0);
    }
  };

  return (
    <div>
      <h2>Verdien er: {value}</h2>
      <button
        onClick={() => {
          handleClick("+");
        }}
      >
        Øk
      </button>
      <button
        onClick={() => {
          handleClick("-");
        }}
      >
        Reduser
      </button>
      <button
        onClick={() => {
          handleClick("0");
        }}
      >
        Nullstille
      </button>
    </div>
  );
};

export default Counter;
