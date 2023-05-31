//react
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//services
import { login } from "../../Services/userServices";
import { loginMessage } from "../../Utils/errorMessages";
//components
import LabeledInput from "../LabeledInput/LabeledInput";
import LoadButton from "../LoadButton/LoadButton";
import Alert from "../Alert/Alert";
import "./loginForm.css"

function LoginForm({context}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({ text: "", variant: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const userLogin = await login(data.email, data.password);
      navigate("/");
      context.handleLogin(userLogin);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      setAlert({
        text: loginMessage[e.code] || loginMessage.generic,
        variant: "alert-error-msg",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <LabeledInput
          label="Correo electrónico"
          type="text"
          control="email"
          register={register}
          errors={errors}
          rules={{ required: true }}
        />
        <LabeledInput
          label="Contraseña"
          type="password"
          control="password"
          register={register}
          errors={errors}
          rules={{ required: true }}
        />
        <Alert text={alert.text} variant={alert.variant} />
        <LoadButton text="Iniciar sesión" loading={loading} />
      </form>
    </>
  );
}

export default LoginForm;
