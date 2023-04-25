import LabeledInput from "./LabeledInput";

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
        <a
        id="register-hyperlink" 
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Haz click aquí para registrarte</a>
        <button className="login-button">Iniciar sesión</button>
    </form>
</>)
}

export default LoginForm;