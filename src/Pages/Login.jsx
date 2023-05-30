import { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import LoginForm from "../Components/LoginForm";

function Login() {
  const context=useContext(AuthContext);
  return (
    <>
      <div className="login-content">
        <div className="login-bubble">
          <LoginForm context={context} />
        </div>
      </div>
    </>
  );
}

export default Login;
