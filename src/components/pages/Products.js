import React from 'react';

//Components
import Container from '@mui/material/Container';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Products = () => {
    return (
        <div>
            <h1>Productos</h1>
            <Container>
                <ItemListContainer />
            </Container>
        </div>
    )
}


export default Products