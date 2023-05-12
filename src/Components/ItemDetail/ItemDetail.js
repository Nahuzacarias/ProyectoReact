import React, { useContext, useState } from 'react'
import { CartContext } from "../Context/CartContext.js";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ItemDetail({id,name,img,description,price,quantity}) {
  const [quantityAdded, setQuantityAaded] = useState(0)
  const {addItem} = useContext(CartContext)

const Agregar  =  (quantity) =>{

  setQuantityAaded(quantity)
}
const item ={

  id,name,price,img
}
 addItem(item,quantity)

  return (
  
    <Card className="detail card1 violet1" >
      <Card.Img className='detail2' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div>
          ${price}
          </div>
          {description}
        </Card.Text>
       
      </Card.Body>  

      
  {quantityAdded > 0 ? (<Link to = "/cart">Terminar compra</Link>):( <ItemCount initial={1} stock= {10} onAdd={Agregar} />)}
    </Card>


  );
}


export default ItemDetail