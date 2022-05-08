import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import LogoDos from '../../Images/play_again-logo-2.png';
import OneUp from '../../Images/1up.png';
import Emoji from '../../Images/emoji.png';
import Joystick from '../../Images/joystick.png';
import Like from '../../Images/like.png'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


//Styles
import '../../scss/base/_base.scss';

const Home = () => {

    useEffect(()=>{
        document.title='Play Again? - Ecommerce';
    },[]);

    return (
        <div>
            <div className="banner">
                <div className='page-title'>
                    <img src={LogoDos}/>
                </div>
            </div>
            <Container className='container'>
                <div className='main-title'>
                    <h1>¡Donde las consolas retro tiene una segunda vida!</h1>
                    <img src={OneUp} alt='1up' />
                </div>
                <div className='item-home-container'>

                    <div className='item-home'>
                        <img src={Emoji} alt='emoji'/>
                        <h2>Reencontrate con tus juegos favoritos</h2>
                        <p>En PLAY AGAIN te traemos aquellas consolas que te dieron horas de diversión</p>
                    </div>

                    <div className='item-home'>
                        <img src={Joystick} alt='joystick'/>
                        <h2>Nuestro catálogo está en crecimiento</h2>
                        <p>Todos los meses renovamos nuestro listado de productos</p>
                    </div>

                    <div className='item-home'>
                        <img src={Like} alt='emoji'/>
                        <h2>Suscribite para recibir nuestras novedades</h2>
                        <p>Enterate antes que nadie de las últimas novedades de nuestro catálogo</p>
                    </div>

                </div>

            </Container>

            <div className="banner-pre-footer">
                <div className='banner-pre-footer-data'>
                    <h2>¡Volvé a tus mejores épocas de gamer!</h2>
                    <button
                     className='baner-pre-footer-btn'
                     onClick={()=>{console.log('Yendo a Productos')}}
                     >
                     <Link to='/productos'>Ver Productos</Link>
                     </button>
                </div>
            </div>
        </div>
    )
}

export default Home