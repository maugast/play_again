import './_item.scss';

//Components
import { useState, useEffect ,useContext } from 'react';
import ItemCartCount from '../ItemCartCount/ItemCartCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';


const Item = ({id,title,image,price,stock,stored})=> {
    
    const {cartProducts, addProductToCart} = useContext(CartContext);
    const [disableBuy, setDisableBuy] = useState(false)

      const data ={
          id,
          title,
          image,
          price,
          stock,
          stored
      }

      const addToCart = (quantity) => {
        console.log('Productos agregados: ', data);
        data.price *=quantity;
        console.log('Quantity ', quantity)
        data.stock-=quantity;
        console.log('Stock actual', data.stock)
        data.stored=quantity;
        addProductToCart(data);

        
      }


      useEffect(()=>{
        let exist = cartProducts.find(cartProduct => cartProduct.id == data.id)
        if(exist){
            console.log('Este producto ya se compró')
            setDisableBuy(true)
        }
      },[cartProducts])

    return (
        <div className='card'>
            <h2>{title}</h2>
            <Link to={`/productos/${id}`}><img src={image} alt='Consola'/></Link>
            <p>Precio: ${price}</p>
            <ItemCartCount
                action={addToCart}
                initial={1}
                stock={data.stock}
                buy={disableBuy}
            />
        </div>
    )
}

export default Item