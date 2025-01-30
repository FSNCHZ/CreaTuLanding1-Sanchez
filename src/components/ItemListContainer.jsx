import ItemList from "./ItemList.jsx"
import productos from "../data/products.json"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config.js"

function ItemListContainer() {

    const [items, setItems] = useState([])
    const { category } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "productos")

        const q = category ? query(productosCollection, where("category", "==", category)) : productosCollection


        getDocs(q)
            .then(snapshot => {

                setItems(
                    snapshot.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )

            })

    }, [category])

    return (
        <>
           <ItemList items={items} />
        </>
    )
}

export default ItemListContainer