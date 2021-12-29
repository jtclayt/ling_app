import { FC, FormEventHandler } from "react";

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form: FC<FormProps> = ({children, onSubmit}) => {
  return (
    <form onSubmit={ onSubmit }>
      <section className="flex flex-col justify-center">
        { children }
      </section>
    </form>
  )
}

export default Form;
