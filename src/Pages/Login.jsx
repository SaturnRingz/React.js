import { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import LoginForm from "../Components/LoginForm/LoginForm";

function Login() {
  const context=useContext(AuthContext);
  return (
    <>
      <LoginForm context={context} />
    </>
  );
}

export default Login;
