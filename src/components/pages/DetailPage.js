//Hooks
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

//Components
import mockItems from '../../itemsMock';
import CartContext from '../../context/CartContext';
import Container from '@mui/material/Container';
import ItemCartCount from '../ItemCartCount/ItemCartCount';

const DetailPage = ({title,image,price,stock,stored}) => {

    const {cartProducts, addProductToCart} = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const data ={
        id:product.id,
        title:product.title,
        image:product.image,
        price:product.price,
        stock:product.stock,
        stored:product.stored
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
        filterConsolesById(mockItems, id);
        console.log('Data: ', data)
    },[id]);

    const filterConsolesById = (array, id) => {
        return array.map((product) =>{
            if(product.id == id){
                return setProduct(product);
            }
        })
    }

    return (
        <Container className='container'>
            <div className='item-detail'>
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt='imagen'/>
                </div>
                <div className='item-detail-data'>
                    <p>Precio: ${product.price}</p>
                    <p>Información técnica: {product.info}</p>
                    <p>Año: {product.year}</p>
                    <ItemCartCount
                        id={product.id}
                        stock={product.stock}
                        initial={1}
                        action={addToCart}
                        />
                </div>
            </div>
        </Container>
    )
}

export default DetailPage