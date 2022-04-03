import React from 'react';

//Components
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import mockItems from '../../itemsMock';

const ItemList = ()=>{

    const [items , setItems] = useState([])

    const getConsoles = ()=>{
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          return resolve(mockItems)
        },2000);
        })
    }


    useEffect(()=>{
        getConsoles().then((mockItems)=>{
            setItems(mockItems);
        })
    },[])


    return(
        <div className='card-grid'>
            {
            items.map((item)=>{
                return <Item
                        id= {item.id}
                        title= {item.title}
                        image= {item.image}
                        price= {item.price}
                        stock={item.stock}
                        />
            })
                }    
        </div>
    )
}

export default ItemList