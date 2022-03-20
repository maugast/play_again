import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import './_card.scss';
import ItemCartCount from '../ItemCartCount/ItemCartCount';

export default function Card ({title, pic ,price}) {

    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={pic} alt='Consola'/>
            <p>Precio: ${price}</p>

            <ItemCartCount />

            <Button
                variant='contained'
                color="secondary">
                Agregar
                
                <AddShoppingCartOutlinedIcon fontSize="small"/>

            </Button>
        </div>
    )
}