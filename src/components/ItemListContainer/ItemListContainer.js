import React, { useState } from "react";
import Card from '../Card/Card';
import './_itemListContainer.scss'
import Atari from '../Images/atari2600.png';

const ItemListContainer = ({greeting}) =>{

    return(
        <div>
            <h1 className="greeting-container">{greeting}</h1>
            <div className="card-grid">
                <Card
                    title = {"Atari"}
                    pic = {Atari}
                    price = {26000}/>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )

}

export default ItemListContainer