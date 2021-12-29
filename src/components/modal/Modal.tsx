import { FC } from "react";

const Modal: FC = ({ children }) => {
  return (
    <section className="w-fit h-fit p-5 mt-24 mx-auto shadow-2xl border-gray-100 border-2 rounded-lg">
      { children }
    </section>
  );
}

export default Modal;
