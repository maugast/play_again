//Hooks
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";

//Components
import CartContext from '../../context/CartContext';
import Container from '@mui/material/Container';
import ItemCartCount from '../ItemCartCount/ItemCartCount';
import db from '../../firebase';

const DetailPage = () => {

    const {cartProducts, addProductToCart} = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [disableBuy, setDisableBuy] = useState()

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


    const getItems = async () => {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let item = docSnap.data();
            item.id = docSnap.id;
            setProduct(item)
            
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }

    useEffect(()=>{
        getItems();
        filterItems(cartProducts, data.id);
    },[id]);


    useEffect(()=>{
        let exist = cartProducts.find(cartProduct => cartProduct.id == data.id)
        if(exist){
            console.log('Este producto ya se compró')
            setDisableBuy(true)
        }
      })

    const filterItems = (array, id)=>{
        console.log('Funcion filterItems:',array);
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
                        buy={disableBuy}
                        />
                </div>
            </div>
        </Container>
    )
}

export default DetailPage