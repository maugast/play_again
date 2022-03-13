import React from 'react';
import Button from '@mui/material/Button';

export default function NavBar(){
    return(
        <header className='main-header'>
        <div className="container-logo">
          <img
            src="./play_again-logo.png"
            className="img-header"
            alt="logo"
          />
        </div>
        <ul className='navbar'>
          <li><Button variant="contained" color="secondary">Home</Button></li>
          <li><Button variant="contained" color="secondary">Productos</Button></li>
          <li><Button variant="contained" color="secondary">Nosotros</Button></li>
          <li><Button variant="contained" color="secondary">Contacto</Button></li>
        </ul>
      </header>
    )
}