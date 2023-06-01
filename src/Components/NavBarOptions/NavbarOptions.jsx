import { Link } from "react-router-dom";
import "./navBarOptions.css"
import DropDownMenu from "../DropDownMenu/DropDownMenu";
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
          <DropDownMenu title="Productos▼">
              <Link to="/product/add">Agregar producto</Link>
              <Link to="/my_products">Mis productos</Link>
          </DropDownMenu>
        </li>
      )}
    </ul>
  );
}
