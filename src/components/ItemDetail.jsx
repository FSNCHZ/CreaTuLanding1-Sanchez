import ItemCount from "./ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

  return (
    <>
      <div className="item-detail">
        <div className="item-detail-card">
          <img src={item.img} alt={item.title} />
          <div className="item-detail-info">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        </div>
        <ItemCount
          item={item} />
      </div>
    </>
  )
}

export default ItemDetail