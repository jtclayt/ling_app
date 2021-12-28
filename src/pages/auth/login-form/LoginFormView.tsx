import { FC } from "react";
import { LoginData } from "../Auth.types";

interface LoginFormViewProps {
  loginData: LoginData;
  setLoginData: (newData: LoginData) => void;
  handleLogin: () => void;
  switchToRegister: () => void;
}

const LoginFormView: FC<LoginFormViewProps> = ({ loginData, setLoginData, switchToRegister, handleLogin }) => {
  return (
    <section className="modal">
      <form>
      <h1 className="text-center font-bold text-3xl">Login form</h1>
      <section className="flex flex-col justify-center">
        <label className="form-label">
          Username
          <input
            className="form-input"
            type="text"
            onChange={(element) => { setLoginData({...loginData, userName: element.currentTarget.value}) }} />
        </label>
        <label className="form-label">
          Password
          <input
            className="form-input"
            type="password"
            onChange={(element) => { setLoginData({...loginData, password: element.currentTarget.value}) }} />
        </label>
      </section>
      <section className="flex justify-center">
        <button className="btn btn-success" onClick={ handleLogin }>
          Submit
        </button>
        <button className="btn btn-primary" onClick={ switchToRegister }>
          Switch to Register
        </button>
      </section>
    </form>
    </section>
  );
};

export default LoginFormView;
