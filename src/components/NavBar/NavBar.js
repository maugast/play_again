import * as React from 'react';

//MUI Components
import AppBar from '@mui/material/AppBar';
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
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Images/play_again-logo.png';
import {Link} from 'react-router-dom';

//Styles
import './_navBar.scss';



const pages = [
	{id:1,   
     title:'Home',
	 url: '/'},
	{id:2,
     title:'Productos',
	 url: '/productos'},
	{id:3,
     title:'Contacto',
	 url: '/contacto'},
]


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="static">
        <Container className="navBar" maxWidth="xl">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <div className="container-logo">
                        <Link to={'/'}><img src={Logo} alt="logo"/></Link>
                        </div>

                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="secondary"
                        >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            (page.id !== 2 ? (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Link to={page.url}>{page.title}</Link>
                                </MenuItem>
                            ):(
                                <div>
                                    <MenuItem
                                        key={page.id}
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}>
                                        Productos
                                    </MenuItem>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}><Link to={'/consolas'}>Consolas</Link></MenuItem>
                                        <MenuItem onClick={handleClose}><Link to={'/accesorios'}>Accesorios</Link></MenuItem>
                                    </Menu>
                                </div>    
                            ))
                            
                        ))}
                    </Menu>
                </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                        <div className="container-logo">
                            <Link to={'/'}><img src={Logo} alt="logo"/></Link>
                        </div>

                    </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        (page.id !== 2 ? (
                            <Button
                                color="secondary"
                                variant="outlined"
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx:1 , color: 'secondary', display: 'block' }}
                                >
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        ):(
                            <>
                                <Button
                                    color="secondary"
                                    variant="outlined"
                                    key={page.id}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ my: 2, mx:1 , color: 'secondary', display: 'block' }}
                                    >
                                    Productos
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}><Link to={'/consolas'}>Consolas</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link to={'/accesorios'}>Accesorios</Link></MenuItem>
                                </Menu>
                          </>
                        ))
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <CartWidget />
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
