import { Component } from "react";
import "./index.css";

import Button from "../../components/Button";
import Display from "../../components/Display";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="display">
        <Display value={100}></Display>
      </div>
      <div className="buttons">
        <Button label="del"></Button>
        <Button label="("></Button>
        <Button label=")"></Button>
        <Button label="mod"></Button>
        <Button label="π"></Button>
        <Button label="7"></Button>
        <Button label="8"></Button>
        <Button label="9"></Button>
        <Button label="÷"></Button>
        <Button label="√"></Button>
        <Button label="4"></Button>
        <Button label="5"></Button>
        <Button label="6"></Button>
        <Button label="×"></Button>
        <Button label="×2"></Button>
        <Button label="1"></Button>
        <Button label="2"></Button>
        <Button label="3"></Button>
        <Button label="-"></Button>
        <Button label="0"></Button>
        <Button label="."></Button>
        <Button label="%"></Button>
        <Button label="+"></Button>
        <Button label="="></Button>
      </div>
    </div>
  );
};

export default Calculator;
