import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  </div>);
}

export default App;
