import { Link} from "react-router-dom";

function LogOptions({context}) {
  return (
    <>
      {context.login && (
        <div className="login-options">
          <Link onClick={context.handleLogOut}>Cerrar sesión</Link>
        </div>
      )}
      {!context.login && (<div className="login-options">
          <Link to="/login">Iniciar Sesión</Link>
          <Link>/</Link>
          <Link to="/register">Registrarse</Link>
        </div>)}
    </>
  );
}

export default LogOptions;
