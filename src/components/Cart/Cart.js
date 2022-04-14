import React from 'react';
import Container from '@mui/material/Container';
import CartContext from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

//Styles
import './_cart.scss';

const Cart = () => {

    const { cartProducts , removeProduct } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        console.log('Productos en el cart: ', cartProducts.length);
        calculateTotalPrice();
    })


    const calculateTotalPrice = ()=>{
        let sum = 0;
        cartProducts.map((cartProduct) =>{
            console.log(cartProduct.price);
            sum += cartProduct.price;
        } )
        return setTotalPrice(sum);
    }

    return (
        <Container className='container'>
            <h1>Carrito de Compra</h1>
            <div className='cart-description-titles'>
                <span><h3>Producto</h3></span>
                <span><h3>Precio</h3></span>
                <span><h3>Cantidad</h3></span>
                <span><h3>Retirar del carrito</h3></span>
            </div>
            {cartProducts.length == 0 && (
                <div><h2>No hay productos en el carrito</h2></div>
            )}
            {cartProducts.map((cartProduct)=>{
                return (
                    <MenuItem className='cart-description-item' key={cartProduct.id}>
	                    <div className='cart-description-img'>
		                    <p>{cartProduct.title}</p>
                            <img src={cartProduct.image}/>
          	            </div>
                        <div>
                            <p>$ {cartProduct.price}</p>
                        </div>
                        <div>
                            <p>xx</p>
                        </div>
	                    <div>
                            <Button
                                onClick={() => {removeProduct(cartProduct)}}>
                                <DeleteIcon />
                            </Button>
	                    </div>
                        <Divider />
                    </MenuItem>
                  )
                })
              }
                
                <div>
                    <h2>Total</h2>
                    <p><strong>$ {totalPrice}</strong></p>
                </div>
                <div className='cart-btn-container'>
                {cartProducts.length===0 ? (
                     <Button
                     variant='outlined'
                     color='secondary'
                     onClick={()=>{console.log('Volviendo a Productos')}}
                     >
                     <Link to='/productos'>Ver Productos</Link>
                 </Button>
                ):(
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={()=>{console.log('Se completó la compra!')}}
                        >
                        Completar compra
                    </Button>
                )}
                   
                </div>
                
        </Container>
    )
}

export default Cart