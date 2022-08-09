export type State = {
  display: string;
  operator: string | null;
  firstOperand: number | null;
  waitingForSecondOperand: boolean;
  memory: number;
};

export enum InputType {
  NUMBER = "NUMBER",
  OPERATION = "OPERATION",
  DECIMAL = "DECIMAL",
  CLEAR = "CLEAR",
}

export type InputAction = {
  type: InputType;
  payload: string;
};
