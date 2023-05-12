import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "./Cartitem.css"

const CartItem = ({ id, name, price,quantity}) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <>
        <div className="itemcarrito">
            <h4>{name}</h4>
            <p>Cantidad:{quantity}</p>
            <p>Precio: {price}</p>
            <p>Sub Total: {price * quantity}</p>
            
            <button className="btn btn-danger botonEliminar" onClick={()=>{handleRemove();console.log(quantity)}} >Eliminar</button>
        </div>
        </>
    )

}

export default CartItem