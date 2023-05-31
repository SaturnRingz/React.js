import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductDetails from "./Pages/ProductDetails";
import AddProduct from "./Pages/AddProduct";
import ModifyProduct from "./Pages/ModifyProduct";
import NavBar from "./Components/NavBar";
import Disclaimer from "./Components/Disclaimer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/authContext";
import MyProducts from "./Pages/MyProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/:id/edit" element={<ModifyProduct />} />
            <Route path="/my_products" element={<MyProducts />}/>
          </Routes>
          <Disclaimer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
