import { productos } from "../data/productos"
import { useParams } from "react-router-dom"

function DetalleProducto(){
    const {id} = useParams()
    const item = productos.find(item=>item.id === parseInt(id))

    if(!item){
        return <h1>No existe el producto</h1>
    }
    return(
        <>
            <div>
                <h1>Producto: </h1>
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
                <p>{item.categoria}</p>
            </div>
        </>
    )
}

export default DetalleProducto