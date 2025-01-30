import "./CartItem.css"

const CartItem = ({ cart }) => {
    return (
        <>
            <>
                {cart.map(prod => (
                    <div key={prod.id} className="cart-item">
                        <img src={prod.img} alt={prod.title} />
                        <div className="cart-item-info">
                            <h2>{prod.title}</h2>
                            <h3>Precio: ${prod.price}</h3>
                            <h3>Unidades: {prod.quantity}</h3>
                        </div>
                    </div>
                ))}
            </>
        </>
    )
}

export default CartItem