import { InputAction, InputType, State } from "./types";

export const INITIAL_STATE: State = {
  display: "0",
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: false,
  memory: 0,
};

export default function reducer(state: State, action: InputAction) {
  const { type, payload } = action;
  switch (type) {
    case InputType.NUMERICAL: {
      const number = payload;
    }
    case InputType.OPERATION: {
      const nextOperator = payload;
    }
    case InputType.CLEAR: {
      return {
        ...state,
        display: "clear",
      };
    }
  }
}
