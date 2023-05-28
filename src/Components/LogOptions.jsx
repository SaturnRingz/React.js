import { Link, useNavigate } from "react-router-dom";

function LogOptions({ isLoggedIn, setLogin }) {
    const navigate = useNavigate();
    const handleLogOut=()=>{
        setLogin(false);
        navigate('/');
    }
  return (
    <>
      {!isLoggedIn && (
        <div className="login-options">
          <Link to="/login">Iniciar sesión</Link>
          <Link
            style={{
              color: "#EA5455",
            }}
          >
            /
          </Link>
          <Link to="/register">Registrarse</Link>
        </div>
      )}

      {isLoggedIn && (
        <div className="login-options">
        <Link onClick={handleLogOut}>Cerrar sesión</Link>
        </div>
      )}
    </>
  );
}

export default LogOptions;
