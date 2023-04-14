import { useState } from "react"
import Button from 'react-bootstrap/Button'
import "./ItemCount.css";


const ItemCount = ({ initial, stock, onAdd,}) => {

    const [quantity, setQuantity] = useState(initial)


    const increment = () => {

        if (quantity < stock)  {

            setQuantity  (quantity + 1)

        }
    }
    const decrement = () => {

            if (quantity > 1) {

                setQuantity (quantity - 1)

            }
        }

        return(

<>
<div className="controls">
<Button variant="primary" className="Control"  onClick={decrement}>-</Button>{' '}
<h2 className="Number">{quantity}</h2>
<Button variant="primary" className="Control"  onClick={increment}>+</Button>{' '}
</div>


<Button variant="primary" onClick={()=> onAdd(quantity) } disabled = {!stock}>ADD</Button>{' '}
</>

        )

    }


export default ItemCount