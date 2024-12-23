import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Productos from './components/Productos.jsx';
import DetalleProducto from './components/DetalleProducto.jsx';
import Contacto from './components/Contacto.jsx';
import FAQ from './components/FAQ.jsx';
import Error from './components/Error.jsx';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='productos' element={<Productos />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='productos/:id' element={<DetalleProducto/>}/>
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
