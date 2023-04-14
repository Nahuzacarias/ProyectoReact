import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../Components/asyncMock/asyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    
    const {itemID} = useParams

    useEffect(() => {
        getProductById(itemID)
            .then((response) => {
                setProduct(response);
            })

            .catch((error) => {
                console.error(error);
            });
    }, [itemID]);
    
    return (
        <div clasName="ItemDetailContainer">
           <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
