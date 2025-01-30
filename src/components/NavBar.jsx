import { Link } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1 className="logo">Alpine</h1>
            <ul className="nav-ul">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <div className="dropdown-center">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </button>
                    <ul className="dropdown-menu">
                        <li className="li-item"><Link to='productos'>Todos los productos</Link></li>
                        <li className="li-item"><Link to='productos/remeras'>Remeras</Link></li>
                        <li className="li-item"><Link to='productos/pantalones'>Pantalones</Link></li>
                        <li className="li-item"><Link to='productos/camperas'>Camperas</Link></li>
                        <li className="li-item"><Link to='productos/medias'>Medias</Link></li>
                        <li className="li-item"><Link to='productos/gorros'>Gorros</Link></li>
                    </ul>
                </div>
                <li>
                    <Link to={"contacto"}>Contacto</Link>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar