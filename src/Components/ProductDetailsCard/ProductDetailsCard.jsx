import { Link } from "react-router-dom";
import "./productdetailscard.css"

function ProductDetailsCard({product, buyLink}){
    return(<>
        <div id="product-card">
            <img
            src={product.thumbnail}
            alt="product-img"
            id="product-detail-img"
            ></img>
            <h2>{product.title}</h2>
            <h6>{product.details}</h6>
            <h3>${product.price}</h3>
            <Link id="buy-button" to={buyLink}>
            Comprar
            </Link>
        </div>
    </>)
}

export default ProductDetailsCard;