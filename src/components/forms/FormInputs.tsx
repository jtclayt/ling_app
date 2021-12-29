import { ChangeEventHandler, FC, Fragment } from "react"

interface FormInputProps {
  label: string;
  type: "text" | "color" | "date" | "time" | "email" | "password";
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FormInput: FC<FormInputProps> = ({ label, type, onChange }) => {
  return (
    <Fragment>
      <label className="m-2 text-lg">
          { label }
          <input
            className="ml-2 px-2 py-1 border-gray-300 border-2 rounded-md"
            type={ type }
            onChange={ onChange } />
        </label>
    </Fragment>
  );
}

export default FormInput;
