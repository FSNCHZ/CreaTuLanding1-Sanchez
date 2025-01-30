import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import "./Cart.css"

const Carrito = () => {

    const { cart, vaciarCarrito, precioTotal } = useContext(CartContext)

    const handleVaciar = () => {
        setTimeout(() => {
            vaciarCarrito()
        }, 500);
    }

    return (
        <>
            <div className='cart-container'>
                <CartItem cart={cart} precioTotal={precioTotal}/>
            </div>
                <>
                {cart.length > 0 &&
                    <h2 className='final-price'>Precio final: ${precioTotal()}</h2>
                }
                </>
            {cart.length > 0 ?
                <div className='cart-btn-container'>
                    <button onClick={handleVaciar}>Vaciar el carrito</button>
                    <Link to='/checkout' ><button>Finalizar compra</button></Link>
                </div> : <h2 className='empty'>El carrito está vacio</h2>}
        </>
    )
}

export default Carrito