import React, { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";
import Product from "../Components/Product/Product";
import { getAllProducts} from "../Services/productServices";
import { AuthContext } from "../Context/authContext";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Cargando productos...");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProducts();
        setProducts(querySnapshot.docs);
        setTitle("Línea de productos");
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, []);

  const context = React.useContext(AuthContext);

  return (
    <LoadingScreen loading={loading}>
      <p id="product-line-title">{title}</p>
      <div id="home-content">
        {products.map((product) => (
          <Product
            key={product.id}
            imgUrl={product.data().thumbnail}
            alt={`productImage${product.id}`}
            id={product.id}
            title={product.data().title}
            price={product.data().price}
            context={context}
          />
        ))}
      </div>
    </LoadingScreen>
  );
}

export default HomePage;