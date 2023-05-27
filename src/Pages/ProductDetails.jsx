import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getById } from "../Services/productServices";
import LoadingScreen from "../Components/LoadingScreen";

function ProductDetails() {

    const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});


  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        setProduct(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

   request()

  }, [id]);
    return (
      <LoadingScreen loading={loading}>
        <div id="product-card">
        <img src={product.thumbnail} alt="product-img" id="product-detail-img"></img>
        <h2>{product.title}</h2>
        <h6>{product.details}</h6>
        <h3>${product.price}</h3>
        <Link id="buy-button"><p>Comprar</p></Link>
        </div>
      </LoadingScreen>
    );
  }
export default ProductDetails;
