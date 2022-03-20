import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

function ItemCartCount (){

    const [stock, setStock] = useState(30);
    const [initial, setInitial] = useState(0);

    const onAdd = () =>{
        setInitial(initial+1);
    }

    const onRemove = () =>{
        setInitial(initial-1);
    }

  return (
    <div className="item-cart-display">
      <Button>
            <RemoveOutlinedIcon onClick={onRemove}/>
      </Button>
        <span>{initial}</span>
      <Button>
            <AddOutlinedIcon onClick={onAdd}/>
      </Button>
    </div>
  );
}

export default ItemCartCount