import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProductDetails from './Pages/ProductDetails';
import AddProduct from './Pages/AddProduct';
import ModifyProduct from './Pages/ModifyProduct'
import NavBar from './Components/NavBar';
import Disclaimer from './Components/Disclaimer';
import {
  BrowserRouter as Router,
  Route,
  Routes,} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  return (
  <div className="App">

    <Router>
      <NavBar isLoggedIn={login} setLogin={setLogin}/>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={login}/>}/>
        <Route path="/login" element={<Login setLogin={setLogin}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product/add" element={<AddProduct/>}/>
        <Route path="/product/edit/:id" element={<ModifyProduct/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Disclaimer/>
    </Router>
  </div>);
}

export default App;
