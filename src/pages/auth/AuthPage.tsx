import axios from "axios";
import { FC, Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../config/constants";
import { User } from "../../models/User";
import { LoginData, RegisterData } from "./Auth.types";
import LoginForm from "./login-form/LoginForm";
import RegisterForm from "./register-form/RegisterForm";

interface AuthPageProps {
  from?: string;
}

const AuthPage: FC<AuthPageProps> = ({ from }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const navigate = useNavigate()

  /** Helper for switch view to login. */
  const switchToLogin = () => {
    setIsLoggingIn(true);
  }

  /** Helper for switching view to register */
  const switchToRegister = () => {
    setIsLoggingIn(false);
  }


  /**
   * Gets register/login data and posts to proper endpoint.
   * Sets user and token in local storage and redirects home or where user came from.
   * @param authData Login/register data
   */
  const handleSubmit = (authData: RegisterData | LoginData) => {
    const endpoint = (isLoggingIn) ? "login" : "register";

    axios.post(`${API_URL}/${endpoint}`, authData)
      .then(res => {
        const user = res.data.user as User;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", res.data.token);
        navigate(from || "/");
      }).catch(err => {
        console.log(err);
      })
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
