import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="fullname"
        placeholder="Insert your name here..."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="expample@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="confirmpassword"
        placeholder="********"
        name="confirmpassword"
      />
      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
