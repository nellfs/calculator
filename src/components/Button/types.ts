export enum InputType {
  Numerical,
  Operation,
}

export enum OperationType {
  Add,
  Subtract,
  Equals,
}

export type OperationAction = {
  operator: OperationType;
  payload: string;
};
