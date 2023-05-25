import { Link } from "react-router-dom"

function Product(props){
return(<>
    <button id="product">
    <Link to={`/product/${props.id}`}>
    <img src={props.imgUrl} alt={props.alt}></img>
    <h2>{props.title}</h2>
    <h3>{props.price}</h3>
    </Link>
    </button>
</>)
}
export default Product