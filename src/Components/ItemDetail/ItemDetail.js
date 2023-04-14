import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js"
import Card from 'react-bootstrap/Card';

function ItemDetail({id,name,img,category,description,price,stock,}) {
  return (
   

    <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
       
      </Card.Body>

      <ItemCount initial={5} stock= {stock} onAdd={(quantity) => console.log ("cantidad agregada")}/>
    </Card>
    
  );
}


export default ItemDetail