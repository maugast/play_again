import './_item.scss';

//Components
import { useState, useEffect ,useContext } from 'react';
import ItemCartCount from '../ItemCartCount/ItemCartCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';


const Item = ({id,title,image,price,stock,stored})=> {
    
    const {cartProducts, addProductToCart} = useContext(CartContext);

      const data ={
          id,
          title,
          image,
          price,
          stock,
          stored
      }

      const addToCart = (quantity) => {
        console.log('Productos agregados: ', cartProducts);
        data.price *=quantity;
        console.log('Quantity ', quantity)
        data.stock-=quantity;
        console.log('Stock actual', data.stock)
        data.stored=quantity;
        addProductToCart(data);
      }

      useEffect(()=>{
          console.log('Productos del carrito: ', cartProducts);
      })


      

    return (
        <div className='card'>
            <h2>{title}</h2>
            <Link to={`/productos/${id}`}><img src={image} alt='Consola'/></Link>
            <p>Precio: ${price}</p>
            <ItemCartCount
                action={addToCart}
                initial={1}
                stock={data.stock}
            />
        </div>
    )
}

export default Item