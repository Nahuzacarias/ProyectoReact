import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import {db} from "../FirebaseReact/config.js"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading,setLoading] = useState(true)

    
    const {itemID} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef =doc(db,"Items",itemID)
        getDoc(docRef)
        .then(response=>{
            const data=response.data()
            const productAdapted = {id:response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [itemID]);
    
    return (
        <div >
{product? <ItemDetail {...product} />
             : <div class="spinner-border text-danger mt-5" role="status">
             <span class="visually-hidden">Loading...</span>
           </div>}
        </div>
    );

};

export default ItemDetailContainer;
