import { Link } from "react-router-dom"

function Product(props){

return(<>
    <button id="product">
    <img id="product-img" src={props.imgUrl} alt={props.alt}></img>
    <h2>{props.title}</h2>
    <h3>{props.price}</h3>
    <div id="product-options">
        <Link className="product-option" to={`/product/${props.id}`}>Detalles</Link>
        <Link className="product-option" to={`/product/edit/${props.id}`}>Modificar</Link>
    </div>
    </button>
</>)
}
export default Product