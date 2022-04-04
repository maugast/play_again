//Hooks
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import mockItems from '../../itemsMock';
import ItemCartDetail from '../ItemCartDetail/ItemCartDetail';

const DetailPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    let [items, setItems] = useState();


    //Función que se pasa al Componente hijo "ItemCartDetail", recibe los parámetros e y q(desde el Componente hijo)
    const addItemsToCart = (e, q) =>{
        e.stopPropagation();
        setItems(q);
        items = q;
        console.log('Desde el hijo:', q );
        console.log('Cantidad de Items agregados:', items);
        setQuantity(quantity+1);
    }


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
                <ItemCartDetail 
                    stock={product.stock}
                    initial={1}
                    action={addItemsToCart}
                />
            </div>
        </div>
    )
}

export default DetailPage