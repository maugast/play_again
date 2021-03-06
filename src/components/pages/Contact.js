import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const Contact = () =>{

    const submitForm = (e) =>{
        e.preventDefault();
        console.log('Formulario enviado');
    }

    useEffect(()=>{
        document.title='Play Again? - Contacto';
    },[]);

    return (
        <Container className='container'>
            <div className="main-title">
                <h1>Contacto</h1>
                <p>Suscribite para recibir información anticipada sobre nuestras últimas novedades</p>
            </div>
            <form className='form' onSubmit={submitForm}>
                <input type={'text'} placeholder={'Nombre'}></input>
                <input type={'text'} placeholder={'Apellido'}></input>
                <input type={'email'} placeholder={'Email'}></input>
                <Button type={'submit'} variant='contained'color="secondary">Enviar datos</Button>
            </form>
        </Container>
    )
}

export default Contact