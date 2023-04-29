import { useState } from "react";

const ProductRequest= async ()=>{
    try{
        const [products, setProducts] = useState([])
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=extraterrestres%20alien").then(meliresponse => meliresponse.json());
        console.log(response);
        setProducts([{id: 1, title: "una inerte barra de carbón", price: 15000, state:"nuevo", description:"el mejor producto del mundo"},
            {id: 2, title: "otra inerte barra de carbón", price: 16666, state:"viejo", description:"el peor producto del mundo"},
            {id: 3, title: "una enorme barra de carbón", price: 19000, state:"nuevo", description:"el producto más inerte del mundo"}]);
    } catch(error){
        console.log(error)
    }
}
export default ProductRequest