import React from 'react';
import Container from '@mui/material/Container';
import CartContext from '../../context/CartContext';
import { useContext, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
//Styles
import './_cart.scss';

const Cart = () => {

    const { cartProducts , removeProduct } = useContext(CartContext)

    useEffect(()=>{
        console.log('Productos en el cart: ', cartProducts.length);
    })

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
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={()=>{console.log('Se completó la compra!')}}
                    >
                    Completar compra
                </Button>
                <div>
                    <h2>Total</h2>
                    <p>$ XXX</p>
                </div>
        </Container>
    )
}

export default Cart