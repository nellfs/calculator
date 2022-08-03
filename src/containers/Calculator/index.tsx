import { Component, useState, useSyncExternalStore } from "react";
import "./index.css";

import Button from "../../components/Button";
import Display from "../../components/Display";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="display">
        <Display value={"nothing here"}></Display>
      </div>
      <div className="buttons">
        <Button type="OPERATION">del</Button>
        <Button type="OPERATION">(</Button>
        <Button type="OPERATION">)</Button>
        <Button type="OPERATION">mod</Button>
        <Button type="OPERATION">π</Button>
        <Button type="NUMERICAL">7</Button>
        <Button type="NUMERICAL">8</Button>
        <Button type="NUMERICAL">9</Button>
        <Button type="OPERATION">÷ </Button>
        <Button type="OPERATION">√</Button>
        <Button type="NUMERICAL">4</Button>
        <Button type="NUMERICAL">5</Button>
        <Button type="NUMERICAL">6</Button>
        <Button type="OPERATION">×</Button>
        <Button type="OPERATION">×2</Button>
        <Button type="NUMERICAL">1</Button>
        <Button type="NUMERICAL">2</Button>
        <Button type="NUMERICAL">3</Button>
        <Button type="OPERATION">-</Button>
        <Button type="NUMERICAL">0</Button>
        <Button type="OPERATION">.</Button>
        <Button type="OPERATION">%</Button>
        <Button type="OPERATION">+</Button>
        <Button type="OPERATION" double>
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
