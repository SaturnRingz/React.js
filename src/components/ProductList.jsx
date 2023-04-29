import { useState } from "react"
import Product from "./Product"
function ProductList(){
    const [products, setProducts] = useState([
        {id: 1, title: "una inerte barra de carbón", price: 15000, state:"nuevo", description:"el mejor producto del mundo"},
        {id: 2, title: "otra inerte barra de carbón", price: 16666, state:"viejo", description:"el peor producto del mundo"},
        {id: 3, title: "una enorme barra de carbón", price: 19000, state:"nuevo", description:"el producto más inerte del mundo"}
    ])

    

    return(<>
        

    </>)
}
export default ProductList