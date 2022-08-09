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
      <div className="display">
        <div className="display-point-left" />
        <div className="display-point-right" />
        <div className="text">{`${state?.display ? state.display : ""}`}</div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Display;
