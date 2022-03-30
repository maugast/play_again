import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useState, useEffect} from 'react';
import './_itemDetailContainer.scss';
import Atari from '../../Images/atari2600.png';


const ItemDetailCotainer = ()=>{

    const mockDetails = ['Atari 2600',Atari,'26000','128 bytes RAM','1977'];

    const [detail, setDetail] = useState([]);

    const getItem = ()=>{
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          return resolve(mockDetails)
        },2000);
        })
    }

    useEffect(()=>{
        getItem().then((mockDetails)=>{
            setDetail(mockDetails);
        })
    },[])

    return (
        <div className="item-detail-container">
            <ItemDetail
                title = {detail[0]}
                image = {detail[1]}
                price = {detail[2]}
                data = {detail[3]}
                year = {detail[4]}
            />
            
        </div>
    )
}

export default ItemDetailCotainer