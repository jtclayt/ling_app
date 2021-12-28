import { Fragment, useState } from "react"
import { LoginData, RegisterData } from "./Auth.types";
import LoginForm from "./login-form/LoginForm";
import RegisterForm from "./register-form/RegisterForm";

const AuthPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const switchToLogin = () => {
    setIsLoggingIn(true);
  }

  const switchToRegister = () => {
    setIsLoggingIn(false);
  }

  const handleSubmit = (authData: RegisterData | LoginData) => {
    console.log(authData);
  }

  return (
    <Fragment>
      {
        (isLoggingIn)
          ? <LoginForm switchToRegister={ switchToRegister } handleSubmit={ handleSubmit } />
          : <RegisterForm switchToLogin={ switchToLogin } handleSubmit={ handleSubmit } />
      }
    </Fragment>
  );
}

export default AuthPage;
