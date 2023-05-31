import { Link } from "react-router-dom";

function Product({ id, title, imgUrl, alt, price, context, product_owner}) {
  return (
    <>
      <button id="product">
        <img id="product-img" src={imgUrl} alt={alt}></img>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <div id="product-options">
          <Link className="product-option" to={`/product/${id}`}>
            Detalles
          </Link>
          {context.login && context.user.uid===product_owner &&(
            <Link className="product-option" to={`/product/edit/${id}`}>
              Modificar
            </Link>
          )}
        </div>
      </button>
    </>
  );
}
export default Product;
