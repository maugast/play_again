import React, { useEffect } from 'react';

//Components
import Container from '@mui/material/Container';
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Products = () => {

useEffect(()=>{
    document.title='Play Again? - Productos';
},[]);

    return (
        <Container className='container'>
            <div className='main-title'>
                <h1>Productos</h1>
            </div>
            <ItemListContainer />
        </Container>
    )
}


export default Products