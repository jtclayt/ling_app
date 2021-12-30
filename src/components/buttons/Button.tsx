import { FC } from "react";

interface ButtonProps {
  variant: ButtonVariants;
  onClick?: () => void;
}

export enum ButtonVariants {
  Primary = "bg-primary-500 hover:bg-primary-700",
  Secondary = "bg-secondary-500 hover:bg-secondary-700",
  Neutral = "bg-neutral-500 hover:bg-neutral-700",
  Success = "bg-success-500 hover:bg-success-700",
  Warning = "bg-warning-500 hover:bg-warning-700",
  Danger = "bg-danger-500 hover:bg-danger-700"
}

const Button: FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button
      className={ `font-bold py-2 px-4 rounded m-2 text-white ${variant}` }
      onClick={ onClick }>
      { children }
    </button>
  );
}

export default Button;