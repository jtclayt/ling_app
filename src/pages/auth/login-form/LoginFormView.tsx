import { FC, FormEvent } from "react";
import Button, { ButtonVariants } from "../../../components/buttons/Button";
import ButtonBar from "../../../components/buttons/ButtonBar";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInputs";
import Modal from "../../../components/modal/Modal";
import { FlexJustify } from "../../../config/style-options";
import { LoginData } from "../Auth.types";

interface LoginFormViewProps {
  loginData: LoginData;
  setLoginData: (newData: LoginData) => void;
  handleLogin: (event: FormEvent) => void;
  switchToRegister: () => void;
}

const LoginFormView: FC<LoginFormViewProps> = ({ loginData, setLoginData, switchToRegister, handleLogin }) => {
  return (
    <Modal>
      <Form title="Login" onSubmit={ handleLogin }>
        <FormInput
          label="Username"
          type="text"
          onChange={ (event) => { setLoginData({...loginData, userName: event.currentTarget.value}) } } />
        <FormInput
          label="Password"
          type="password"
          onChange={ (event) => { setLoginData({...loginData, password: event.currentTarget.value}) } } />

        <ButtonBar justifyAlignment={ FlexJustify.Center }>
          <Button variant={ButtonVariants.Success}>Submit</Button>
          <Button
            variant={ButtonVariants.Primary}
            onClick={ switchToRegister }>
            Switch to Register
          </Button>
        </ButtonBar>
      </Form>
    </Modal>
  );
};

export default LoginFormView;
