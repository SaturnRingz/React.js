function LabeledInput(props){
    return(
        <label className="labeled-input">{props.title}
        <div style={{height: "3px"}}></div>
        <input  type={props.type} 
                name={props.name} 
                id={props.id} 
                className="register-input"/>
        </label>
    );
}

export default LabeledInput;