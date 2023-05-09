import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext.js'
import CartItem from '../CartItem/CartItem.js'

const Cart = () => {
    const {cart,clearCart,totalQuantity,total} = useContext(CartContext)


if(totalQuantity === 0){

return(
<div>

<h1>El carrito esta vacío</h1>
<Link to = "/" className="option">Productos</Link>
</div>
)
}
  return (
    <div>

{cart.map(p=><CartItem key={p.id}{...p}/>) }

<h3>Total: ${total}</h3>
<button onClick={()=>clearCart()} >Limpiar carrito</button>
<Link to ="/checkout">Checkout</Link>


    </div>
  )
}

export default Cart