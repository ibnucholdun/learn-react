import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useEffect, useRef, useState } from "react";
import { login } from "../../Services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("username", e.target.username.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Insert your username here..."
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-2">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
