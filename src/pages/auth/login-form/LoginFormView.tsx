import { FC } from "react";
import Button from "../../../components/buttons/Button";
import ButtonBar from "../../../components/buttons/ButtonBar";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInputs";
import Modal from "../../../components/modal/Modal";
import { LoginData } from "../Auth.types";

interface LoginFormViewProps {
  loginData: LoginData;
  setLoginData: (newData: LoginData) => void;
  handleLogin: () => void;
  switchToRegister: () => void;
}

const LoginFormView: FC<LoginFormViewProps> = ({ loginData, setLoginData, switchToRegister, handleLogin }) => {
  return (
    <Modal>
      <Form onSubmit={ handleLogin }>
        <FormInput
          label="Username"
          type="text"
          onChange={ (event) => { setLoginData({...loginData, userName: event.currentTarget.value}) } } />
        <FormInput
          label="Password"
          type="password"
          onChange={ (event) => { setLoginData({...loginData, password: event.currentTarget.value}) } } />

        <ButtonBar alignment="center">
          <Button variant="success">Submit</Button>
          <Button
            variant="primary"
            onClick={ switchToRegister }>
            Switch to Login
          </Button>
        </ButtonBar>
      </Form>
    </Modal>
  );
};

export default LoginFormView;
