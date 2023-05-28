import { Link } from "react-router-dom";
import NavbarOptions from "./NavbarOptions";
import LogOptions from "./LogOptions";

function NavBar({isLoggedIn, setLogin}) {
  const marketName = "TiendAlien";
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
                <NavbarOptions isLoggedIn={isLoggedIn}/>
                <LogOptions isLoggedIn={isLoggedIn} setLogin={setLogin}/>
            </nav>
      </div>
    </>
  );
}

      export default NavBar;