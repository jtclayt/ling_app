import { FC } from "react";
import { FlexJustify } from "../../config/style-options";

interface ButtonBarProps {
  justifyAlignment: FlexJustify;
}

const ButtonBar: FC<ButtonBarProps> = ({ children, justifyAlignment }) => {
  return (
    <section className={`p-5 flex ${justifyAlignment}`}>
      { children }
    </section>
  )
}

export default ButtonBar;
