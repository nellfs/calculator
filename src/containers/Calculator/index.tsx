import { Component } from "react";
import "./index.css";

import Button from "../../components/Button";
import Display from "../../components/Display";

export default class Calculator extends Component {
  clearMemory() {
    console.log("clear");
  }

  setOperation(operation?: string) {
    console.log(operation);
  }

  addDigit(n?: string) {
    console.log(n);
  }

  render() {
    const clearMemory = () => this.clearMemory;
    const setOperation = (operation: string) => this.setOperation(operation);
    const addDigit = (n: string) => this.addDigit(n);
    return (
      <div className="calculator">
        <div className="display">
          <Display value={"test"}></Display>
        </div>
        <div className="buttons">
          <Button label="del" click={clearMemory} />
          <Button label="(" click={() => setOperation("ok")} />
          <Button label=")" />
          <Button label="mod" />
          <Button label="π" />
          <Button label="7" />
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
  }
}
