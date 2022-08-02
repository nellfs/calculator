import { ReactNode } from "react";
import "./index.css";
import { InputType } from "./types";

interface ButtonProps {
  type: keyof typeof InputType;
  double?: true;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`button 
        ${props.double ? "result" : ""}
    `}
    >
      {props.children}
    </button>
  );
};

export default Button;
