import { Component, useState, useSyncExternalStore } from "react";
import "./index.css";

import Button from "../../components/Button";
import Display from "../../components/Display";

const Calculator = () => {
  const [state, setState] = useState("test");
  return (
    <div className="calculator">
      <div className="display">
        <Display value={state}></Display>
      </div>
      <div className="buttons">
        <Button label="del" /> <Button label="(" /> <Button label=")" />{" "}
        <Button label="mod" />
        <Button label="π" />
        <Button
          label="7"
          click={() => {
            setState("working");
          }}
        />
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
