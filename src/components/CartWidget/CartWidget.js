import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';

//Styles
import './_cartWidget.scss';

const CardWidget = () =>{

    const { cartProducts , removeProduct ,clearCart} = useContext(CartContext)
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return(
        <div>
          <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
            <ShoppingCartRoundedIcon  fontSize="large" color="secondary"/>
            <p>{cartProducts.length}</p>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}>
              <Typography sx={{ p: 2 }}>Carrito de Compras</Typography>
              <Divider/>
              {cartProducts.map((cartProduct)=>{
                return (
                  <MenuItem className='cart-widget-menu' key={cartProduct.id}>
	                  <div className='cart-widget-img'>
		                  <img src={cartProduct.image}/>
          	        </div>
	                  <div>
		                  <p>{cartProduct.title}</p>
		                  <span>$ {cartProduct.price}</span>
                      <p><strong>Cantidad    </strong>{cartProduct.stored}</p>
	                  </div>
	                  <div>
                    <Button
                        onClick={() => {removeProduct(cartProduct)}}>
                        <DeleteIcon />
                    </Button>
	                  </div>
                  </MenuItem>
                  )
                })
              }
              <Divider/>
              <div className='cart-widget-footer'>
	              <Button variant='contained' color='secondary'><Link to='/cart'className='cart-widget-link'>Completar compra</Link></Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={clearCart}
                  >
                    Limpiar carrito
                </Button>
              </div>
          </Popover>
        </div>
    );
}

export default CardWidget
