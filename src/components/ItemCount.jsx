import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "./CartContext"
import "./ItemCount.css"

const ItemCount = ( {item} ) => {

const [quantity, setQuantity] = useState(1)
const { agregarAlCarrito } = useContext(CartContext)

const handleRestar = () => {
    quantity > 1 && setQuantity(quantity - 1)
}

const handleSumar = () => {
    quantity < item.stock && setQuantity(quantity + 1)
}

const handleAgregar = () => {
    agregarAlCarrito(item, quantity)
}

  return (
    <div className="add-btn-container">
        <div className="quantity">
            <button onClick={handleRestar}>-</button>
            <p>{quantity}</p>
            <button onClick={handleSumar}>+</button>
        </div>
            <button onClick={handleAgregar} className="add-btn">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount