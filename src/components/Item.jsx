import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.img} alt={item.title} />
      <div className="item-info">
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <Link to={`/producto/${item.id}`} className="item-detail-btn">Detalle del producto</Link>
      </div>
    </div>

  )
}

export default Item