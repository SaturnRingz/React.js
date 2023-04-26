import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetails from './pages/ProductDetails';
import { 
  BrowserRouter as Router,
  Route,
  Routes,} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
  <div className="App">
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<ProductDetails/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  </div>);
}

export default App;
