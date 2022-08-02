export type State = {
  displayValue: string;
  clearDisplay: false;
  operation: null;
  values: object;
  current: number;
};

export enum InputType {
  NUMERICAL = "NUMERICAL",
  OPERATION = "OPERATION",
}

export type InputAction = {
  type: InputType;
  payload: string;
};
