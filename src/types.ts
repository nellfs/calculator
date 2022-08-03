export type State = {
  display: string;
  operator: string | null;
  firstOperand: number | null;
  waitingForSecondOperand: boolean;
  memory: number;
};

export enum InputType {
  NUMERICAL = "NUMERICAL",
  OPERATION = "OPERATION",
  CLEAR = "CLEAR",
}

export type InputAction = {
  type: InputType;
  payload: string;
};
