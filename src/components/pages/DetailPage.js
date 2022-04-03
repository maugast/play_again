import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import mockItems from '../../itemsMock';
import Button from '@mui/material/Button';


const DetailPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        filterConsolesById(mockItems, id);
    },[id]);

    const filterConsolesById = (array, id) => {
        return array.map((product) =>{
            if(product.id == id){
                return setProduct(product);
            }
        })
    }

    return (
        <div>
            <div className='item-detail'>
                <h2>{product.title}</h2>
                <img src={product.image} alt='imagen'/>
                <p>Precio: ${product.price}</p>
                <p>Información técnica: {product.data}</p>
                <p>Año: {product.year}</p>
                <Button
                    //onClick={}
                    variant='contained'
                    color="secondary">
                    Comprar
                </Button>
            </div>
        </div>
    )
}

export default DetailPage