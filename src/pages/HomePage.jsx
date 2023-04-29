import { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Product from "../components/Product";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("Listado de productos");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ProductRequest = async () => {
      try {
        const response = await fetch(
          "https://api.mercadolibre.com/sites/MLA/search?q=extraterrestres%20alien"
        ).then((melires) => melires.json());
        setProducts(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    try {
      ProductRequest().then(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <LoadingScreen/>;
  } else {
    return (
      <>
        <p>{titulo}</p>
        {products.map((product, i) => (
          <Product
            key={i}
            title={product.title}
            price={product.price}
          />
        ))}
      </>
    );
  }
}
export default HomePage;
