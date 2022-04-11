import React, { useEffect } from 'react';
import Container from '@mui/material/Container';

const About = ()=>{

    useEffect(()=>{
        document.title='Play Again? - Nosotros';
    },[]);

    return (
        <Container className='container'>
            <h1>Nosotros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur bibendum enim ut lectus scelerisque ultricies.
                Aliquam erat volutpat. Phasellus id accumsan sem.
                Suspendisse potenti. Duis tincidunt consequat enim,
                congue pellentesque mauris bibendum at.
                Curabitur at velit a lacus convallis volutpat.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Integer posuere, mi sed ultrices auctor, ligula mi finibus urna,
                sit amet tempus tortor purus ac ipsum. Aliquam feugiat,
                diam quis pretium convallis, lacus justo varius felis, id feugiat nisl odio at purus.
                Integer auctor enim vitae diam faucibus pellentesque.
                Mauris facilisis nunc et augue auctor rutrum.</p>
        </Container>
    )
}

export default About