import React, { createContext } from "react";
import reducer, { INITIAL_STATE } from "./reducer";
import { InputAction, State } from "./types";

export const Context = React.createContext<
  [State, React.Dispatch<InputAction>] | [null, null]
>([null, null]);

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useReducer<React.Reducer<State, InputAction>>(
    reducer,
    INITIAL_STATE
  );
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
