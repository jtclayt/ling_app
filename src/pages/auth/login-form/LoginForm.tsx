import { FC, useState } from "react";
import { LoginData, RegisterData } from "../Auth.types";
import LoginFormView from "./LoginFormView";

interface LoginFormProps {
  switchToRegister: () => void;
  handleSubmit: (authData: RegisterData | LoginData) => void;
}

const LoginForm: FC<LoginFormProps> = ({ switchToRegister, handleSubmit })  => {
  const [loginData, setLoginData] = useState<LoginData>({
    userName: "",
    password: ""
  });

  const handleLogin = () => {
    handleSubmit(loginData);
  }

  return <LoginFormView
    switchToRegister={ switchToRegister }
    handleLogin={ handleLogin }
    loginData={ loginData }
    setLoginData={ setLoginData } />
}

export default LoginForm;
