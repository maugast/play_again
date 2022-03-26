import React, { useState } from "react";
import './_itemListContainer.scss'
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) =>{

    return(
        <div>
            <h1 className="greeting-container">{greeting}</h1>
            <ItemList />
        </div>
    )

}

export default ItemListContainer