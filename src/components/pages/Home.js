import React, { useEffect } from 'react';
import Container from '@mui/material/Container';

const Home = () => {

    useEffect(()=>{
        document.title='Play Again? - Ecommerce';
    },[]);

    return (
        <div>
            <div className="banner"></div>
            <Container className='container'>
               <h1>Home</h1>
            </Container>
        </div>
    )
}

export default Home