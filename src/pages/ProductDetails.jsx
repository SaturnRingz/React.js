import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../Services/productServices";
import LoadingScreen from "../Components/LoadingScreen";

function ProductDetails() {
  
    const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  
  
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response);
        setLoading(false);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

   request()

  }, [id]);


  if (loading) {
    return <LoadingScreen />;
  } else {
    return (
      <>
        <div id="product-card">
        <img src={product.pictures[0].url} alt="product-img" id="product-detail-img"></img>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <button id="buy-button">
          <Link >Comprar</Link>
        </button>
        </div>
      </>
    );
  }
}
export default ProductDetails;
