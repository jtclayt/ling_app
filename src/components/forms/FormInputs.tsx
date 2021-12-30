import { ChangeEventHandler, FC } from "react"

interface FormInputProps {
  label: string;
  type: "text" | "color" | "date" | "time" | "email" | "password";
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FormInput: FC<FormInputProps> = ({ label, type, onChange }) => {
  return (
    <div className="flex justify-between w-full">
      <label className="m-2 text-lg">
        { label }
      </label>
      <input
        className="ml-2 px-2 py-1 border-gray-300 border-2 rounded-md self-end"
        type={ type }
        onChange={ onChange } />
    </div>
  );
}

export default FormInput;
