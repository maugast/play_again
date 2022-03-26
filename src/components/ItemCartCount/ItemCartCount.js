import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function ItemCartCount ({stock, initial, counter}){

  const [count, setCount] = useState(initial);
  const [disableUp, setDisableUp] = useState(false);
  const [disableDown, setDisableDown] = useState(true);
 

  const setItemCountUp = ()=>{
    setCount(count+1);
    if(count === stock-1){
      console.log('Stock alcanzado');
      setDisableUp(true);
    }else{
      setDisableDown(false);
    }
  }

  const setItemCountDown = () =>{
    setCount(count-1);
    if(count <= initial+1){
      console.log('Cantidad menor a inicial');
      setDisableDown(true);
      
    }else{
      setDisableUp(false);
    }
  }

  return (
    <div className="item-cart-display">
      <Button
        onClick={setItemCountDown}
        disabled={disableDown}
        >
            <RemoveOutlinedIcon/>
      </Button>
        <span>{count}</span>
      <Button
        onClick={setItemCountUp}
        disabled={disableUp}>
            <AddOutlinedIcon/>
      </Button>
      <Button
          onClick={()=>{counter(count)}}
          variant='contained'
          color="secondary">
          Agregar     
          <AddShoppingCartOutlinedIcon fontSize="small"/>
      </Button>
    </div>
  );
}

export default ItemCartCount