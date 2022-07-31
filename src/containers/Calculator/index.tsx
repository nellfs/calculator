import { Component, useState, useSyncExternalStore } from "react";
import "./index.css";

import Button from "../../components/Button";
import Display from "../../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const addNumber = (n: number | string) => {
    setState({ ...state, displayValue: state.displayValue + n });
  };

  const [state, setState] = useState({ ...initialState });
  return (
    <div className="calculator">
      <div className="display">
        <Display value={state.displayValue}></Display>
      </div>
      <div className="buttons">
        <Button
          label="del"
          click={() => {
            setState({ ...state, displayValue: "" });
          }}
        />
        <Button label="(" />
        <Button label=")" />
        <Button label="mod" />
        <Button label="π" />
        <Button label="7" click={addNumber(7)} />
        <Button label="8" />
        <Button label="9" />
        <Button label="÷" />
        <Button label="√" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="×" />
        <Button label="×2" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="-" />
        <Button label="0" />
        <Button label="." />
        <Button label="%" />
        <Button label="+" />
        <Button label="=" double />
      </div>
    </div>
  );
};

export default Calculator;
