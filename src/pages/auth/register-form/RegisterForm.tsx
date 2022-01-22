import { FC, FormEvent, useState } from "react";
import { LoginData, RegisterData } from "../Auth.types";
import RegisterFormView from "./RegisterFormView";

interface RegisterFormProps {
  switchToLogin: () => void;
  handleSubmit: (authData: RegisterData | LoginData) => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ switchToLogin, handleSubmit })  => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    checkPassword: ""
  });

  /** Function for preventing default form behavior and submitting the data. */
  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(registerData);
  }

  return <RegisterFormView
    switchToLogin={ switchToLogin }
    handleRegister={ handleRegister }
    registerData={ registerData }
    setRegisterData={ setRegisterData } />
}

export default RegisterForm;
