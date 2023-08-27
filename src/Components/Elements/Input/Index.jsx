import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
