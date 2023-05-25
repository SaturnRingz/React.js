import { Link } from "react-router-dom";

function NavBar(){
    return(
    <>
        <nav id="navbar">
            <Link id="navbar-corporate-brand" to="/">
            <img id="corporate-brand-logo" src={require('../Assets/pictures/alienpet.png')}alt="alienpet"></img>
                <p>
                    TiendAlien
                </p>

            </Link>
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
            </ul>
            <div className="login-options">
                <button>
                    <Link to="/login">Iniciar sesión</Link>
                </button>
                <p style={{color: '#EA5455'}}>/</p>
                <button>
                    <Link to="/register">Registrarse</Link>
                </button>
            </div>
        </nav>
    </>)
}
export default NavBar;