import React from 'react';

//Components
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom'
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemList = ()=>{

    const [items , setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    const getConsoles = async ()=>{
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const ItemsList = itemsSnapshot.docs.map((doc)=>{
            let item = doc.data();
            item.id = doc.id;
            return item;
        })
        return ItemsList;
    }


    useEffect(()=>{
        setItems([]);
        setLoading(true);
        getConsoles().then((items)=>{
            setLoading(false);
            category ? filterProductByCategory(items, category) : setItems(items);
            
        })
    },[category])


    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setItems(items => [...items, product]);
            }
        })
    }

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