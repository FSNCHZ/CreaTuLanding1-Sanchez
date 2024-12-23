import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import NavBar from "./NavBar.jsx"
import { productos } from "../data/productos.js"
import "./productos.css"

function Productos(props) {
    const [items, setItems] = useState([])


    useEffect(() => {
        const fetch = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        fetch.then((data) => {
            setItems(data)
        })
    }, [])

    return (
        <>
            <div className="container">
                <ItemList items={items} />
            </div>
        </>
    )
}

export default Productos