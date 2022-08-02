import { InputAction, State } from "./types";

export const INITIAL_STATE: State = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function reducer(state: State, action: InputAction) {
    const {type, payload} = action;
    switch(type) {
        case 
    }
}

