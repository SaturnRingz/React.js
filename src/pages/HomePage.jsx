import { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import Product from "../Components/Product";
import { getAllProducts } from "../Services/productServices";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Cargando productos...");
  const [products, setProducts] = useState([]);
  const imageUrl = "https://media.newyorker.com/photos/5d0be56fe140839b70c68120/master/w_2560%2Cc_limit/Phillips-Neon-Genesis-Evangelion.jpg";

  useEffect(
    ()=>{
        const request = async () => {
            try {
        const response = await getAllProducts();
        setProducts(response.results);
        setTitle("Línea de productos");
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  if (loading) {
    return <LoadingScreen/>;
  } else {
    return (
      <>
        <p id="product-line-title">{title}</p>
        <div id="home-content">
        {products.map((product, i) => (
          <Product
            key={i}
            imgUrl={product.thumbnail}
            alt={`productImage${i}`}
            id={product.id}
            title={product.title}
          />
        ))}
        </div>
      </>
    );
  }
}
export default HomePage;
