import {useForm} from 'react-hook-form';
import { createUser } from '../Services/userServices';
import LabeledInput from './LabeledInput';

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
        <button className="register-button" type="submit">Registrarse</button>
        </form>
        </div>
    </>)
}

export default RegisterForm;