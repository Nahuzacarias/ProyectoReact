import React, { useContext, useState } from 'react'
import { db } from "../FirebaseReact/config.js"
import CheckoutForm from "../CheckoutForm/CheckoutForm.js"
import { CartContext } from '../Context/CartContext.js'
import { Timestamp, writeBatch, collection, query, where, getDocs, addDoc, documentId } from 'firebase/firestore'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, "products")
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            for (const doc of productsAddedFromFirestore.docs) {
                const dataDoc = doc.data()
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                const stockDb = dataDoc.stock
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            }

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("hay productos que están fuera de stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es:{orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout
