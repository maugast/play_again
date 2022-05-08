import * as React from 'react';

//MUI Components

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

//Components
import Logo from '../../Images/play_again-logo.png';
import {Link} from 'react-router-dom';
import Facebook from '../../Images/facebook.png';
import Instagram from '../../Images/instagram.png';
import Twitter from '../../Images/twitter.png';

//Styles
import './_footer.scss';



const Footer = () => {
 

  return (

    <div className="footer">

        <div className="container-logo">
            <Link to={'/'}><img src={Logo} alt="logo"/></Link>
        </div>

        <p className='footer-text'>
            ©
	        <span>2022 </span>
            PLAY AGAIN?.
        </p>

        <div className='social'>
            <span>
                <img src={Facebook}/>
            </span>
            <span>
                <img src={Instagram}/>
            </span>
            <span>
                <img src={Twitter}/>
            </span>
        </div>

    </div>
  );
};

export default Footer;