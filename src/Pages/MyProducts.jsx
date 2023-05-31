import React, { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import Product from "../Components/Product";
import { AuthContext } from "../Context/authContext";
import { getProductsByUserId } from "../Services/productServices";

function MyProducts() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Cargando productos...");
  const [products, setProducts] = useState([]);
  const context = React.useContext(AuthContext);

  useEffect(() => {
    const request = async () => {
    const userId = await context.user.uid;
      try {
        const querySnapshot = await getProductsByUserId(userId);
        setProducts(querySnapshot.docs);
        setTitle("Mis productos");
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [context.user.uid]);


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
            context={context}
            product_owner={product.data().owner_id}
          />
        ))}
      </div>
    </LoadingScreen>
  );
}

export default MyProducts;