import "./index.css";

interface ButtonProps {
  label: string | number;
  type?: "submit" | "reset" | "button";
  double?: true;
  disabled?: boolean;
  click?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={(e) => props.click && props.click()}
      className={`button 
        ${props.double ? "result" : ""}
    `}
    >
      {props.label}
    </button>
  );
};

export default Button;
