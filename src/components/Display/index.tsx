import React from "react";
import { Context } from "../../context";
import "./index.css";

interface DisplayProps {
  value: string | number;
}

const Display = (props: DisplayProps) => {
  const [state] = React.useContext(Context);
  return (
    <div>
      <div className="display">{`${state?.display ? state.display : "0"}`}</div>
      <div className="shadow"></div>
    </div>
  );
};

export default Display;
