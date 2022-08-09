import { Component, useState, useSyncExternalStore } from "react";
import "./index.css";

import Button from "../../components/Button";
import Display from "../../components/Display";
import Results from "../../components/Results";
import TopBar from "../../components/TopBar";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="topbar">
        <TopBar />
      </div>
      <div className="results">
        <Results />
      </div>
      <div className="display">
        <Display value={"nothing here"}></Display>
      </div>
      <div className="buttons">
        <Button type="CLEAR">del</Button>
        <Button type="OPERATION">(</Button>
        <Button type="OPERATION">)</Button>
        <Button type="OPERATION">mod</Button>
        <Button type="OPERATION">π</Button>
        <Button type="NUMBER">7</Button>
        <Button type="NUMBER">8</Button>
        <Button type="NUMBER">9</Button>
        <Button type="OPERATION">÷ </Button>
        <Button type="OPERATION">√</Button>
        <Button type="NUMBER">4</Button>
        <Button type="NUMBER">5</Button>
        <Button type="NUMBER">6</Button>
        <Button type="OPERATION">×</Button>
        <Button type="OPERATION">×2</Button>
        <Button type="NUMBER">1</Button>
        <Button type="NUMBER">2</Button>
        <Button type="NUMBER">3</Button>
        <Button type="OPERATION">-</Button>
        <Button type="NUMBER">0</Button>
        <Button type="DECIMAL">.</Button>
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
