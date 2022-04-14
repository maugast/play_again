import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{

    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) =>{
        let exist = cartProducts.find(cartProduct => cartProduct.id == product.id)

        !exist && setCartProducts(cartProducts =>[...cartProducts, product])
    }

    const removeProduct = (product) =>{
        setCartProducts(cartProducts.filter( (cartProduct) => {
            return cartProduct.id !== product.id
		}))
    }

    const clearCart = () =>{
        setCartProducts([]);
      }
      

    const data = {
        cartProducts,
        addProductToCart,
        clearCart,
        removeProduct
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartProvider }
export default CartContext