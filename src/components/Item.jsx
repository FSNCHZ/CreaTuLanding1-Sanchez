
import { Link } from "react-router-dom"
import "./Item.css"

function Item({id, nombre, precio, categoria}){
    return(
        <Link to={`/productos/${id}`}  className="item-card">
            <div>
                <h2>{nombre}</h2>
                <p>${precio}</p>
                <p>{categoria}</p>
            </div> 
        </Link>
    )
}

export default Item