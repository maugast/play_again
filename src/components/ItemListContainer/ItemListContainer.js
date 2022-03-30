import React, { useState } from "react";
import './_itemListContainer.scss'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () =>{

    return(
        <div>
            <div className="banner"></div>
            <ItemList />
        </div>
    )

}

export default ItemListContainer