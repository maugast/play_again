import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    

    const addProductToCart = (product) =>{
        let exist = cartProducts.find(cartProduct => cartProduct.id == product.id)
        if(!exist){
            setTotalPrice(totalPrice + product.price)
            setCartProducts(cartProducts =>[...cartProducts, product])
        }
    }

    const removeProduct = (product) =>{
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))

    }

    const clearCart = () =>{
        setCartProducts([]);
        setTotalPrice(0)
      }
      


    const data = {
        cartProducts,
        addProductToCart,
        clearCart,
        removeProduct,
        totalPrice
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartProvider }
export default CartContext