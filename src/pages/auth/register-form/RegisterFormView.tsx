import { FC, FormEvent } from "react";
import Button from "../../../components/buttons/Button";
import ButtonBar from "../../../components/buttons/ButtonBar";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInputs";
import Modal from "../../../components/modal/Modal";
import { RegisterData } from "../Auth.types";

interface RegisterFormViewProps {
  registerData: RegisterData;
  setRegisterData: (newData: RegisterData) => void;
  handleRegister: (event: FormEvent) => void;
  switchToLogin: () => void;
}

const RegisterFormView: FC<RegisterFormViewProps> = ({ registerData, setRegisterData, switchToLogin, handleRegister }) => {
  return (
    <Modal>
      <Form onSubmit={ handleRegister }>
        <FormInput
          label="Username"
          type="text"
          onChange={ (event) => { setRegisterData({...registerData, userName: event.currentTarget.value}) } } />
        <FormInput
          label="First Name"
          type="text"
          onChange={ (event) => { setRegisterData({...registerData, firstName: event.currentTarget.value}) } } />
        <FormInput
          label="Last Name"
          type="text"
          onChange={ (event) => { setRegisterData({...registerData, lastName: event.currentTarget.value}) } } />
        <FormInput
          label="Password"
          type="password"
          onChange={ (event) => { setRegisterData({...registerData, password: event.currentTarget.value}) } } />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={ (event) => { setRegisterData({...registerData, checkPassword: event.currentTarget.value}) } } />

        <ButtonBar alignment="center">
          <Button variant="success">Submit</Button>
          <Button
            variant="primary"
            onClick={ switchToLogin }>
            Switch to Login
          </Button>
        </ButtonBar>
      </Form>
    </Modal>
  );
};

export default RegisterFormView;
