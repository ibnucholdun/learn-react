import React from "react";
import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
