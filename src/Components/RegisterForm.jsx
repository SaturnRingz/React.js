import {useForm} from 'react-hook-form';
import { createUser } from '../Services/userServices';

function RegisterForm(){
    const {register, handleSubmit, formState:{errors}} = useForm ({mode: 'onChange'});

    const onSubmit=(data)=>{
        try{
                const user = createUser(data);
                console.log(user)
        }catch(e){
            console.log(e)
        }
    }
    return(
    <>
        <div className="register-bubble">
        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Regístrate</h1>
        <label className="labeled-input">Nombre
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="name"
                id="name"
                className="register-input"
                {...register("name", {required: true})}
                />
                {errors.name?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>
        <label className="labeled-input">Apellido
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="lastName"
                id="lastName"
                className="register-input"
                {...register("lastName", {required: true})}
                />
                {errors.lastName?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>
        <label className="labeled-input">Teléfono
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="register-input"
                {...register("phoneNumber", {required: true})}
                />
                {errors.phoneNumber?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>
        <label className="labeled-input">Correo
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="email"
                id="email"
                className="register-input"
                {...register("email", {required: true})}
                />
                {errors.email?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>
        <label className="labeled-input">Contraseña
        <div style={{height: "3px"}}></div>
        <input  type="password"
                name="password"
                id="password"
                className="register-input"
                {...register("password", {required: true, minLength:8, maxLength:16})}
                />
                {errors.password?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
                {errors.password?.type === 'minLength' &&(<p id="error-msg">La contraseña es muy corta</p>)}
                {errors.password?.type === 'maxLength' &&(<p id="error-msg">La contraseña es muy larga</p>)}
        </label>
        <button className="register-button" type="submit">Registrarse</button>
        </form>
        </div>
    </>)
}

export default RegisterForm;