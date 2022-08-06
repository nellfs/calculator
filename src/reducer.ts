import { InputAction, InputType, State } from "./types";

export const INITIAL_STATE: State = {
  display: "0",
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: true,
  memory: 0,
};

export default function reducer(state: State, action: InputAction) {
  const { type, payload } = action;
  switch (type) {
    case InputType.NUMBER: {
      const number = payload;

      let { display } = state;

      display = state.display + number;

      return {
        ...state,
        display,
      };
    }
    case InputType.OPERATION: {
      const nextOperator = payload;
    }
    case InputType.CLEAR: {
      return {
        ...state,
        display: "0",
        waitingForSecondOperand: false,
      };
    }
  }
}
