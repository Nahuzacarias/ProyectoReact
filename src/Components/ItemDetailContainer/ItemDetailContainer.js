import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseReact/config.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemID } = useParams();

  useEffect(() => {
    const docRef = doc(db, "Items", itemID);
    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemID]);

  return (
    <>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <div class="spinner-border text-danger mt-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
