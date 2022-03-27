import React from 'react';
import {useState} from 'react';
import './_itemDetail.scss';
import Button from '@mui/material/Button';

const ItemDetail = ({title, image, price, data, year}) => {
    return (
        <div className='item-detail'>
            <h2>{title}</h2>
            <img src={image} alt='imagen'/>
            <p>Precio: ${price}</p>
            <p>Información técnica: {data}</p>
            <p>Año: {year}</p>
            <Button
                //onClick={}
                variant='contained'
                color="secondary">
                Comprar
            </Button>
        </div>
    )
}

export default ItemDetail