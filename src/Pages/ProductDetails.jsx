import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getById } from "../Services/productServices";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";
import ProductDetailsCard from "../Components/ProductDetailsCard/ProductDetailsCard";

function ProductDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const cruelAngelThesis =
    "https://soundcloud.com/artemis-ward-123265960/neon-genesis-evangelion-opening-a-cruel-angels-thesis";
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        console.log(response.data());
        setProduct(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);
  return (
    <LoadingScreen loading={loading}>
      <ProductDetailsCard product={product} buyLink={cruelAngelThesis}/>
    </LoadingScreen>
  );
}
export default ProductDetails;
