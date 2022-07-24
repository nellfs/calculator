import "./index.css";

interface ButtonProps {
  label: string | number;
  type?: "submit" | "reset" | "button";
  double?: true;
  disabled?: boolean;
  click?: () => {} | string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      // onClick={props.click ? (e) => props.click(props.label) : ""}
      className={`button 
        ${props.double ? "result" : ""}
    `}
    >
      {props.label}
    </button>
  );
};

export default Button;
