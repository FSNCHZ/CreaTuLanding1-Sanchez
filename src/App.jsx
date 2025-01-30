import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Productos from './components/ItemListContainer.jsx';
import DetalleProducto from './components/ItemDetailContainer.jsx'
import Contacto from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import Error from './components/Error.jsx';
import { CartContext } from './components/CartContext.jsx';
import { useState } from 'react';
import Checkout from './components/Checkout.jsx';

function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item, quantity) => {
    const itemAgregado = { ...item, quantity }
    const newCart = [...cart]
    const found = cart.find(prod => prod.id === itemAgregado.id)

    if (found) {
      found.quantity += quantity
      setCart(newCart)
    } else {
      setCart([...cart, itemAgregado])
    }
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  const cartQuantity = () => {
    return cart.length
  }

  const precioTotal = () => {
    return cart.reduce((acc, prod) => acc + (prod.quantity * prod.price), 0)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, setCart, agregarAlCarrito, vaciarCarrito, cartQuantity, precioTotal }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='productos' element={<Productos />} />
              <Route path='productos/:category' element={<Productos />} />
              <Route path='producto/:id' element={<DetalleProducto />} />
              <Route path='contacto' element={<Contacto />} />
              <Route path='cart' element={<Cart />} />
              <Route path='checkout' element={<Checkout />}/>
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App
