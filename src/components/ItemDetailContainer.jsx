import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config.js"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)  
    const {id} = useParams()

    useEffect(() => {
      
      const productRef = doc(db, "productos", id)
      getDoc(productRef)
        .then((snapshot) => {
          setItem(
            { ...snapshot.data(), id: snapshot.id}
          )

        })
    }, [id])

    if(!item){
      return <h2>No se encontró el producto</h2>
    }

  return (
    <div className="container">
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer