import { Link } from "react-router-dom";

function NavBar(){
    return(
    <>
        <nav id="navbar">
            <a id="navbar-corporate-brand" href="https://benhowell.github.io/react-grid-gallery/examples/custom-image-component">
            <img id="corporate-brand-logo" src={require('../media/pictures/alienpet.png')}alt="alienpet"></img>
                <p>
                <Link to="/">TiendAlien</Link>
                </p>
            </a>
            <ul id="navbar-options">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="https://www.chess.com/es/play/online">Random</Link>
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