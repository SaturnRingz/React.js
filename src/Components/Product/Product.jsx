import { Link } from "react-router-dom";
import "./product.css"
function Product({ id, title, imgUrl, alt, price, context, product_owner}) {
  return (
    <>
      <Link id="product" to={`/product/${id}`}>
          <img src={imgUrl} alt={alt}></img>
          <div>
            <h2>{title}</h2>
            <h4>{price}</h4>
          </div>
          <div id="product-options">
          {context.login && context.user.uid===product_owner &&(
            <Link className="product-option" to={`/product/${id}/edit`}>
              Modificar
            </Link>
          )}
          </div>
      </Link>
    </>
  );
}
export default Product;
