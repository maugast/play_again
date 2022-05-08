import React from 'react';
import Container from '@mui/material/Container';
import CartContext from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import ModalCustom from '../Modal/Modal';
import db from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

//Styles
import './_cart.scss';

const Cart = () => {

    const { cartProducts , removeProduct, totalPrice, clearCart } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false);


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartProducts.map( (cartProduct)=> {
                return {
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price
                }
            }),
            total: totalPrice
        }
    )


    const [successOrder , setSuccessOrder ] = useState()

    const handleSubmit = (e) =>{
        let prevOrder = {...order,
            buyer : formData
        }

        e.preventDefault();
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder)=>{
        const orderFireBase = collection(db,'ordenes')
        const orderDoc = await addDoc(orderFireBase, prevOrder)
        setSuccessOrder (orderDoc.id)
        clearCart();
    }

    const handleChange = (e) =>{
        const {value, name} = e.target;

        setFormData({
            ...formData,
            [name] : value

        })
    }

    useEffect(()=>{
        return totalPrice;
    })


    useEffect(()=>{
        setOrder(
            {
                buyer : formData,
                items: cartProducts.map( (cartProduct)=> {
                    return {
                        id: cartProduct.id,
                        title: cartProduct.title,
                        price: cartProduct.price
                    }
                }),
                total: totalPrice
            }
        )
    },[cartProducts])

    

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
                    <div className='cart-description-item'>
                        <MenuItem key={cartProduct.id}>
                            <div className='cart-description-img'>
                                <p>{cartProduct.title}</p>
                                <img src={cartProduct.image}/>
                            </div>
                            <div>
                                <p>$ {cartProduct.price}</p>
                            </div>
                            <div>
                                <p>{cartProduct.stored}</p>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {removeProduct(cartProduct)}}>
                                    <DeleteIcon />
                                </Button>
                            </div>
                            <Divider />
                        </MenuItem>
                    </div>
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
                        onClick={()=>{setOpenModal(true)}}
                        >
                        Finalizar compra
                    </Button>
                )}
                   
                </div>
                {console.log('order ', order)}
                <ModalCustom handleClose={()=>{setOpenModal(false)}} open={openModal}>
                    {successOrder ? (
                        <div className='order-form'>
                            <h3>Orden Generada!</h3>
                            <p>Su número de orden es: {successOrder}</p>
                            
                        </div>
                    ):(
                        <div className='order-form'>
                            <h3>Formulario de orden</h3>
                            <form onSubmit={handleSubmit}>
                                <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={formData.name}></input>
                                <input type='number' name='phone' placeholder='Teléfono' onChange={handleChange} value={formData.phone}></input>
                                <input type='email' name='email' placeholder='Email' onChange={handleChange} value={formData.email}></input>

                                <Button
                                    type='submit' 
                                    variant='contained'
                                    color="secondary"
                                    >Enviar datos</Button>
                            </form>
                        </div>
                    )}
                </ModalCustom>
        </Container>
    )
}

export default Cart