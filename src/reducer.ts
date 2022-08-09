import { InputAction, InputType, State } from "./types";

export const INITIAL_STATE: State = {
  display: "",
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

      display += number;

      return {
        ...state,
        display,
      };
    }
    case InputType.OPERATION:
      return state;
      break;

    case InputType.DECIMAL: {
      const operator = payload;
      let { display } = state;
      if (!display.includes(".")) display += ".";
      return {
        ...state,
        display,
      };
    }

    case InputType.CLEAR: {
      return {
        ...state,
        display: "",
        waitingForSecondOperand: false,
      };
    }
    default:
      return state;
  }
}
