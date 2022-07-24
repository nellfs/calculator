import "./index.css";

interface ButtonProps {
  label: string | number;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return <button className="button">{props.label}</button>;
};

export default Button;
