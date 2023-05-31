import "./labeledInput.css"

function LabeledInput({ label, type, control, register, errors, rules }) {
  return (
    <>
      <label className="labeled-input">
        {label}
        <input
          className="register-input"
          type={type}
          {...register(control, rules)}
        />
        {errors && errors[control] && (
          <span>
            {errors[control].type === "required" && (
              <p id="error-msg">Este campo es obligatorio</p>
            )}
            {errors[control].type === "minLength" && (
              <p id="error-msg">La contraseña es muy corta</p>
            )}
            {errors[control].type === "maxLength" && (
              <p id="error-msg">La contraseña es demasiado larga</p>
            )}
          </span>
        )}
      </label>
    </>
  );
}

export default LabeledInput;
