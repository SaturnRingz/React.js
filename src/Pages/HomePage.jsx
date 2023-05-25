import { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import Product from "../Components/Product";
import { getAllProducts } from "../Services/productServices";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Cargando productos...");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('Aliens');

  useEffect(
    ()=>{
        const request = async () => {
            try {
        const response = await getAllProducts(search);
        setProducts(response.results);
        setTitle("Línea de productos");
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [search]);

  const handleChange=(event)=>{
    const value= event.target.value;
    console.log(value);
    setSearch(value);
  }

  if (loading) {
    return <LoadingScreen/>;
  } else {
    return (
      <>
        <p id="product-line-title">{title}</p>
        <input type="text" id="search" value={search} onChange={handleChange}></input>
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
