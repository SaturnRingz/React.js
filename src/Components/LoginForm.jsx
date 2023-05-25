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
        <button className="login-button">
        <a href="https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4"  target="_blank" rel="noreferrer">
            Iniciar sesión
        </a>
        </button>
    </form>
</>)
}

export default LoginForm;