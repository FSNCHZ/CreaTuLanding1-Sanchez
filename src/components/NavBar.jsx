import { Link } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"

function NavBar() {
    return (
        <div className="navbar">
            <h1 className="logo">Logo</h1>
            <ul className="nav-ul">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"productos"}>Productos</Link>
                </li>
                <li>
                    <Link to={"contacto"}>Contacto</Link>
                </li>
                <li>
                    <Link to={"faq"}>FAQ</Link>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar