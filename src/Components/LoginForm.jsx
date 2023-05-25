import {useForm} from 'react-hook-form';
import { login } from '../Services/userServices';
function LoginForm(){
    const {register, handleSubmit, formState:{errors}} = useForm ({mode: 'onChange'});

    const onSubmit= async (data)=>{
        try{
            const userLogin = await login(data.email, data.password);
        }catch(e){
            console.log(e)
        }
    }
    return(
    <>
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="labeled-input">Correo
            <div style={{height: "3px"}}></div>
            <input  type="text"
                    name="email"
                    id="login-username"
                    className="register-input"
                    {...register("email", {required: true})}
                    />
                    {errors.email?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
            </label>
            <label className="labeled-input">Contraseña
            <div style={{height: "3px"}}></div>
            <input  type="password"
                    name="password"
                    id="login-pwd"
                    className="register-input"
                    {...register("password", {required: true, minLength:8, maxLength:16})}
                    />
                    {errors.password?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
            </label>
            <button className="login-button" type="submit">Ingresar
            </button>
        </form>
    </>)
}

export default LoginForm;