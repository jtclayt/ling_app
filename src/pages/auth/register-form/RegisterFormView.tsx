import { FC, FormEvent } from "react";
import { RegisterData } from "../Auth.types";

interface RegisterFormViewProps {
  registerData: RegisterData;
  setRegisterData: (newData: RegisterData) => void;
  handleRegister: (event: FormEvent) => void;
  switchToLogin: () => void;
}

const RegisterFormView: FC<RegisterFormViewProps> = ({ registerData, setRegisterData, switchToLogin, handleRegister }) => {
  return (
    <section className="modal">
      <form onSubmit={ handleRegister }>
      <h1 className="text-center font-bold text-3xl">Register form</h1>
      <section className="flex flex-col items-center">
        <label className="form-label">
          Username
          <input
            className="form-input"
            type="text"
            onChange={(element) => { setRegisterData({...registerData, userName: element.currentTarget.value}) }} />
        </label>
        <label className="form-label">
          First Name
          <input
            className="form-input"
            type="text"
            onChange={(element) => { setRegisterData({...registerData, firstName: element.currentTarget.value}) }} />
        </label>
        <label className="form-label">
          Last Name
          <input
            className="form-input"
            type="text"
            onChange={(element) => { setRegisterData({...registerData, lastName: element.currentTarget.value}) }} />
        </label>
        <label className="form-label">
          Password
          <input
            className="form-input"
            type="text"
            onChange={(element) => { setRegisterData({...registerData, password: element.currentTarget.value}) }} />
        </label>
        <label className="form-label">
          Confirm Password
          <input
            className="form-input"
            type="text"
            onChange={(element) => { setRegisterData({...registerData, checkPassword: element.currentTarget.value}) }} />
        </label>
      </section>
      <section className="flex justify-center">
        <button className="btn btn-success">
          Submit
        </button>
        <button className="btn btn-primary" onClick={ switchToLogin }>
          Switch to Login
        </button>
      </section>
    </form>
    </section>
  );
};

export default RegisterFormView;
