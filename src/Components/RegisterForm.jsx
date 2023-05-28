import {useForm} from 'react-hook-form';
import { createUser } from '../Services/userServices';
import LabeledInput from './LabeledInput';
import { useState } from 'react';
import Alert from './Alert';
import LoadButton from './LoadButton';
import { registerMessage } from '../Utils/errorMessages';

function RegisterForm(){
    const {register, handleSubmit, formState:{errors}} = useForm ({mode: 'onChange'});
    const [alert, setAlert] = useState({text:'', variant:'', duration:0, link:''})
    const [loading, setLoading] = useState(false);

    const onSubmit= async (data)=>{
        setLoading(true);
        try{
                const user = await createUser(data);
                setAlert({text:"Tu cuenta ha sido creada exitosamente", variant:"alert-success-msg", duration:300, link:'/'})
                setLoading(false);
        }catch(e){
                setLoading(false);
                setAlert({text:registerMessage[e.code] || registerMessage.generic, variant:"alert-error-msg"});
        }
    }
    return(
    <>
        <div className="register-bubble">
        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Regístrate</h1>
        <LabeledInput   label="Nombre"
                        type="text"
                        control="name"
                        register={register}
                        rules={{required: true}}
                        errors={errors}
        />
        <LabeledInput   label="Apellido"
                        type="text"
                        control="lastName"
                        register={register}
                        rules={{required: true}}
                        errors={errors}
        />
        <LabeledInput   label="Teléfono"
                        type="number"
                        control="phoneNumber"
                        register={register}
                        rules={{required: true}}
                        errors={errors}
        />
        <LabeledInput   label="Correo electrónico"
                        type="email"
                        control="email"
                        register={register}
                        rules={{required: true}}
                        errors={errors}
        />
        <LabeledInput   label="Password"
                        type="password"
                        control="password"
                        register={register}
                        rules={{required: true, minLength: 8, maxLength: 16}}
                        errors={errors}
        />
        <Alert text={alert.text} variant={alert.variant} duration={alert.duration} link={alert.link}/>
        <LoadButton text="Registrarse" loading={loading}/>
        </form>
        </div>
    </>)
}

export default RegisterForm;