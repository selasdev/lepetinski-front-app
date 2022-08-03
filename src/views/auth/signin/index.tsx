import Navbar from "../../../components/organisms/Navbar";
import React from "react";
import { FormValuesType, RegisterForm } from "./form";
import { useAuthenticationProvider } from "../../../contexts/Auth/context";
import { useNavigate } from "react-router";

const SignInView = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthenticationProvider();
  const onFormSubmit = (formValues: FormValuesType) => {
    if (setUser) {
      setUser({
        email: formValues.email,
        birthDate: formValues.date,
        id: "123",
        name: formValues.name,
      });
    }
    navigate("/");
  };

  return (
    <React.Fragment>
      <Navbar />
      <RegisterForm onSubmit={onFormSubmit} />
    </React.Fragment>
  );
};

export default SignInView;
