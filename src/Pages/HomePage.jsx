import { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import SearchBar from "../Components/SearchBar";
import Product from "../Components/Product";
import { getAllProducts } from "../Services/productServices";

function HomePage({ isLoggedIn }) {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Cargando productos...");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProducts(search);
        setProducts(querySnapshot.docs);
        setTitle("Línea de productos");
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [search]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <LoadingScreen loading={loading}>
      <p id="product-line-title">{title}</p>
      <SearchBar value={search} onChange={handleChange} />
      <div id="home-content">
        {products.map((product) => (
          <Product
            key={product.id}
            imgUrl={product.data().thumbnail}
            alt={`productImage${product.id}`}
            id={product.id}
            title={product.data().title}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </LoadingScreen>
  );
}

export default HomePage;
