import CartWidget from "./CartWidget.jsx"

function NavBar(){
    return (
        <div class="navbar">
            <h1>Logo</h1>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>FAQ</li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar