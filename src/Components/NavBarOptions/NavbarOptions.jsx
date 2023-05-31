import { Link } from "react-router-dom";
import "./navBarOptions.css"
export default function NavbarOptions({context}) {
  return (
    <ul id="navbar-options">
      <li>
        <Link to="/">Shop</Link>
      </li>
      <li>
        <Link to="https://www.chess.com/es/play/online">Chess</Link>
      </li>
      <li>
        <Link to="/*">404</Link>
      </li>
      {context.login && (
        <li>
          <div className="dropdown">
            <button className="dropbtn">Productos▼</button>
            <div className="dropdown-content">
              <Link to="/product/add">Agregar producto</Link>
              <Link to="/my_products">Mis productos</Link>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
}
