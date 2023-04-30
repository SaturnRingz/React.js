import LabeledInput from "./LabeledInput";

function RegisterForm(){
    return (
    <>
    <div className="register-bubble">
    <form id="register-form">
    <h1>Formulario de registro</h1>
        <LabeledInput   
        title="Nombre"                
        type="text"
        id="name"/>
        <LabeledInput
        title="Apellido"
        type="text"
        id="last-name"/>
        <LabeledInput
        title="Correo Electrónico"
        type="email"
        id="email"/>
        <LabeledInput
        title="Número de teléfono"
        type="text"
        id="phone"/>
        <LabeledInput
        title="Contraseña"
        type="password"
        id="pwd"/>
        <LabeledInput
        title="Repetir Contraseña"
        type="password"
        id="re-pwd"/>
        <button className="register-button">
        <a href="https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4">
            Registrarse
        </a>
        </button>
    </form>
    </div>
    </>
    )
}

export default RegisterForm;