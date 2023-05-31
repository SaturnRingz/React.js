import React, { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import SearchBar from "../Components/SearchBar";
import Product from "../Components/Product";
import { getAllProducts } from "../Services/productServices";
import { AuthContext } from "../Context/authContext";

function HomePage() {
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

  const context = React.useContext(AuthContext);

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
            context={context}
          />
        ))}
      </div>
    </LoadingScreen>
  );
}

export default HomePage;

/* CASO MELI:

seEffect(() => {
    const request = async () => {
      try {
        const response = await getAllProducts(search);
        setProducts(response.results);
        setTitle("Línea de productos");
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [search, products]);

  ...
      <div id="home-content">
        {products.map((product,i)=>(
          <Product
            key={i}
            imgUrl={product.thumbnail}
            alt={product.thumbnail_id}
            id={product.id}
            title={product.title}
          />
        ))}
      </div>
*/
