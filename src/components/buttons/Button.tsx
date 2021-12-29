import { FC } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "success" | "neutral" | "warning" | "danger"
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button
      className={ `btn btn-${variant}` }
      onClick={ onClick }>
      { children }
    </button>
  );
}

export default Button;