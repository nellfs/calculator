import "./index.css";

interface DisplayProps {
  value: string | number;
}

const Display = (props: DisplayProps) => {
  return <div className="display">{props.value}</div>;
};

export default Display;
