import { Link} from "react-router-dom";
import "./logOptions.css"
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function LogOptions({context}) {
  return (
    <>
      {context.login && (
        <DropDownMenu title={`${context.user.name} ${context.user.lastName}`}>
          <Link to="/" onClick={context.handleLogOut}>Cerrar sesión</Link>
        </DropDownMenu>
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
