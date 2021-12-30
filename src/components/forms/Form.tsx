import { FC, FormEventHandler } from "react";

interface FormProps {
  title?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form: FC<FormProps> = ({children, title, onSubmit}) => {
  return (
    <form onSubmit={ onSubmit }>
      <h1 className="text-center text-3xl font-bold">{ title }</h1>
      <section className={`flex flex-col w-fit`}>
        { children }
      </section>
    </form>
  )
}

export default Form;
