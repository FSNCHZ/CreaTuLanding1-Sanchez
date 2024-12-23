import { useState } from "react"
import Item from "./Item.jsx"
import "./ItemList.css"

const categorias = {
    FRUTAS: "Frutas",
    ALMACEN: "Despensa",
    LACTEOS: "Lácteos",
    PANIFICADOS: "Panadería",
    BEBIDAS: "Bebidas"
}

function ItemList({ items }) {
    const [selectedCategory, setSelectedCategory] = useState("")

    const filter = selectedCategory ? items.filter(item => item.categoria === selectedCategory) : items
    return (
        <>
            <div className="filters-container">
                <button class="filter-button" onClick={() => setSelectedCategory("")}>Eliminar filtros</button>
                <button class="filter-button" onClick={() => setSelectedCategory(categorias.FRUTAS)}>Frutas</button>
                <button class="filter-button" onClick={() => setSelectedCategory(categorias.ALMACEN)}>Despensa</button>
                <button class="filter-button" onClick={() => setSelectedCategory(categorias.LACTEOS)}>Lácteos</button>
                <button class="filter-button" onClick={() => setSelectedCategory(categorias.PANIFICADOS)}>Panadería</button>
                <button class="filter-button" onClick={() => setSelectedCategory(categorias.BEBIDAS)}>Bebidas</button>
            </div>
            <div className="items-container">
                {
                    filter.map((item) => (
                        <Item
                            key={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            categoria={item.categoria}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ItemList