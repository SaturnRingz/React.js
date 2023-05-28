import { useNavigate } from "react-router-dom";

function Alert({variant, text, duration = 0, link}){
    const navigate = useNavigate('');
    if(duration !==0 && link){
        setTimeout(()=>{
            navigate(link)
        }, duration);
    }
    return (<>
                <p id={variant}>{text}</p>
    </>)
} export default Alert;