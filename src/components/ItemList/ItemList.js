import React from 'react';

//Components
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import mockItems from '../../itemsMock';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const ItemList = ()=>{

    const [items , setItems] = useState([])
    const [loading, setLoading] = useState(true);


    const getConsoles = ()=>{
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          return resolve(mockItems)
        },2000);
        })
    }


    useEffect(()=>{
        getConsoles().then((mockItems)=>{
            setLoading(false);
            setItems(mockItems);
        })
    },[])


    return(
        <div>
            {loading ?(
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                </Stack>          
            ):(
                <div className='card-grid'>
                    {items.map((item)=>{
                        return <Item
                            key={item.id}
                            id= {item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            stock={item.stock}
                        />})}
                </div>
            )}
        </div>
    )
}

export default ItemList