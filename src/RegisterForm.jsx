import LabeledInput from "./LabeledInput";

function RegisterForm(){
    return (
    <>
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
        <input type="submit" value="Registrarse" className="register-button"/>
    </form>
    </>
    )
}

export default RegisterForm;