import { FC } from "react";

interface ButtonBarProps {
  alignment: "center" | "start" | "end" | "evenly";
}

const ButtonBar: FC<ButtonBarProps> = ({ children, alignment }) => {
  return (
    <section className={`flex justify-${alignment}`}>
      { children }
    </section>
  )
}

export default ButtonBar;
