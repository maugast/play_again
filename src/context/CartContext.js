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
        newTotal(product); //Llamo a la función que vuelve a calcular el total
        console.log('Cantidad de productos en cartProduct: ', cartProducts)
    }

    //Función que calcula el total cuando se remueve algún item del carrito
    const newTotal = (product) =>{
        let newCartProducts = cartProducts.map((cartProduct)=>{
            console.log('cartProduct.price: ', cartProduct.price);
            setTotalPrice(totalPrice-product.price)
        })
        return newTotal;
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