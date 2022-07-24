import "./index.css";

interface DisplayProps {
  value: string | number;
}

const Display = (props: DisplayProps) => {
  return (
    <div>
      <div className="display">{props.value}</div>
      <div className="shadow"></div>
    </div>
  );
};

export default Display;
