import { Link } from "react-router-dom";
import NavbarOptions from "./NavbarOptions";
import LogOptions from "./LogOptions";
import { useContext } from "react";
import { AuthContext } from "../Context/authContext";


function NavBar() {
  const marketName = "TiendAlien";
  const context=useContext(AuthContext);
  return (
    <>
      <div id="nav-bar-container">
        <nav id="navbar">
          <Link id="navbar-corporate-brand" to="/">
            <img
              id="corporate-brand-logo"
              src={require("../Assets/pictures/alienpet.png")}
              alt="alienpet"
            ></img>
            <p>{marketName}</p>
          </Link>
          <NavbarOptions context={context} />
          <LogOptions context={context}/>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
