import { Link } from "react-router-dom";
import "./product.css"
function Product({ id, title, imgUrl, alt, price, context, product_owner}) {
  return (
    <>
      <button id="product">
        <img src={imgUrl} alt={alt}></img>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <div id="product-options">
          <Link className="product-option" to={`/product/${id}`}>
            Detalles
          </Link>
          {context.login && context.user.uid===product_owner &&(
            <Link className="product-option" to={`/product/${id}/edit`}>
              Modificar
            </Link>
          )}
        </div>
      </button>
    </>
  );
}
export default Product;
