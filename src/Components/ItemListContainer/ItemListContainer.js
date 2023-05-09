import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList.js"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import {getDocs,collection,query,where} from "firebase/firestore"
import {db} from "../FirebaseReact/config.js"


export const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  const {categoryId} = useParams()

  useEffect(() => {

    setLoading(true)

    const collectionRef = categoryId ? query(collection(db,"Items"),where("category","==",categoryId))
    : collection (db,"Items")

getDocs(collectionRef)

.then(response=>{
const productsAdapted = response.docs.map(doc=>{

  const data = doc.data()
  return {id: doc.id,...data}
})

setProducts(productsAdapted)
})

.catch(error=>{

  console.log (error)
})

.finally(()=>{

  setLoading(false)
})

  }, [categoryId])

  return (
    <div className='color4'>
      <h1 className="h1 animate__animated animate__backInLeft">{greeting}</h1>
      <ItemList  products={products} />
    </div>
  )
}

export default ItemListContainer