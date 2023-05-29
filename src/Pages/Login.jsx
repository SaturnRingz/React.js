import LoginForm from "../Components/LoginForm";

function Login({ setLogin }) {
  return (
    <>
      <div className="login-content">
        <div className="login-bubble">
          <LoginForm setLogin={setLogin} />
        </div>
      </div>
    </>
  );
}

export default Login;
