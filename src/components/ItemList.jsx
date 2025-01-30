import Item from "./Item.jsx"
import "./ItemList.css"

function ItemList({ items }) {
    return (
        <>
            <h2>Productos</h2>
            <div className="item-container">
                { items.map(e => <Item item={e} key={e.id}/>)}
            </div>
        </>
    )
}

export default ItemList