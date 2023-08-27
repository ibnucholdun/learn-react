import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
