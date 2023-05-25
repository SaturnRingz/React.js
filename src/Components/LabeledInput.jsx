import ErrorBubble from "./ErrorBubble";


function LabeledInput({title, type = "text", name, register, errors,
  }){
    return(<>
        <label className="labeled-input">{title}
        <div style={{height: "3px"}}></div>
        <input  type={type}
                name={name}
                className="register-input"
                {...register}
                />
        {errors && ErrorBubble}
        </label>
    </>);
}

export default LabeledInput;