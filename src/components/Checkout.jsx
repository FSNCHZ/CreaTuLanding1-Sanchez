import { useContext, useState } from "react"
import Form from "./Form"
import { CartContext } from "./CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config.js"
import "./Checkout.css"

const Checkout = () => {

  const [orderId, setOrderId] = useState("")

  const { cart, vaciarCarrito } = useContext(CartContext)

  const orderRef = collection(db, "pedidos")

  const comprar = (data) => {
    if (cart.length > 0) {
      const order = {
        "user": data,
        "products": cart,
      }

      addDoc(orderRef, order)
        .then((doc) => {
          setOrderId(doc.id)
          vaciarCarrito()
        })
    }
  }

  return (
    <>
      {orderId ? (
        <div className="checkout-success">
          <h1>Muchas gracias por su compra</h1>
          <p>Su compra ha sido completada, el código es: {orderId}</p>
        </div>
      ) : <Form comprar={comprar} />}
    </>
  )
}

export default Checkout