import {useForm} from 'react-hook-form';
import { login } from '../Services/userServices';
import LabeledInput from './LabeledInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from './Alert';
import { loginMessage } from '../Utils/errorMessages';
import LoadButton from './LoadButton';
function LoginForm({setLogin}){
    const {register, handleSubmit, formState:{errors}} = useForm ({mode: 'onChange'});
    const navigate= useNavigate();
    const [alert, setAlert]= useState({text:'', variant:''})
    const [loading, setLoading]= useState(false)

    const onSubmit= async (data)=>{
        try{
            setLoading(true)
            const userLogin = await login(data.email, data.password);
            navigate('/')
            setLogin(true);
            setLoading(false)
        }catch(e){
            setLoading(true)
            setAlert({text:loginMessage[e.code] || loginMessage.generic, variant:"alert-error-msg"});
            setLoading(false)
        }
    }

    return(
    <>
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <LabeledInput   label="Correo electrónico"
                            type="text"
                            control="email"
                            register={register}
                            errors={errors}
                            rules={{required:true}}

            />
            <LabeledInput   label="Contraseña"
                            type="password"
                            control="password"
                            register={register}
                            errors={errors}
                            rules={{required:true}}
            />
            <Alert text={alert.text} variant={alert.variant}/>
            <LoadButton text="Iniciar sesión" loading={loading}/>
        </form>
    </>)
}

export default LoginForm;