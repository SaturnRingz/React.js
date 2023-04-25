import LabeledInput from "./LabeledInput";
import { Link } from "react-router-dom";
function LoginForm(){
return(
<>
    <form id="login-form">
        <LabeledInput
            id="login-username"
            title="Usuario"
            type="text"
        />
        <LabeledInput
            id="login-pwd"
            title="Contraseña"
            type="password"
        />
        <Link id="register-hyperlink" to="/register">Haz click aquí para registrarte</Link>
        
        <button className="login-button">
        <a href="https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4">Iniciar sesión</a>
        </button>
    </form>
</>)
}

export default LoginForm;