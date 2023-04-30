import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import NavBar from './Components/NavBar';
import ProductDetails from './Pages/ProductDetails';
import Disclaimer from './Components/Disclaimer';
import { 
  BrowserRouter as Router,
  Route,
  Routes,} from 'react-router-dom';

function App() {
  return (
  <div className="App">
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Disclaimer/>
    </Router>
  </div>);
}

export default App;
