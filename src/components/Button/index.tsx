import { Children, ReactNode, useContext } from "react";
import "./index.css";
import { InputType, InputAction } from "../../types";
import { Context } from "../../context";
interface ButtonProps {
  type: keyof typeof InputType;
  double?: true;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const [, dispatch] = useContext(Context);
  const actionPayload = props.children?.toString();

  const handleClick = () =>
    dispatch &&
    dispatch({
      type: InputType[props.type],
      payload: actionPayload ? actionPayload : "null",
    });

  return (
    <button
      onClick={handleClick}
      className={`button 
        ${props.double ? "result" : ""}
    `}
    >
      {props.children}
    </button>
  );
};

export default Button;
