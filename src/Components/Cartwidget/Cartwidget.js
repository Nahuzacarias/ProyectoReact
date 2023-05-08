import { useContext } from "react"
import '../style.css';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';



const Cartwidget =() =>{

const {totalQuantity} = useContext(CartContext)

return(
<Link to ="/cart">
<div className="carrito">

<img src={require("../../assets/carrito.png")}
alt="icono carrito"/>
<p className="cero">{totalQuantity}</p>

</div>
</Link>
)
}

export default Cartwidget