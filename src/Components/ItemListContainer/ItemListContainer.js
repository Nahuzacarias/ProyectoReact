import React from 'react'
import { useState, useEffect } from 'react'
import { getproductcategory, getProducts,  } from "../asyncMock/asyncMock.js"
import ItemList from "../ItemList/ItemList.js"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {

    const asyncFunc = categoryId ? getproductcategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })

      .catch(error => {
        console.error(error)
      })

  }, [categoryId])

  return (
    <div className='color4'>
      <h1>{greeting}</h1>
      <ItemList  products={products} />
    </div>
  )
}

export default ItemListContainer