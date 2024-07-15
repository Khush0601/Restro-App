import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import Home from './Pages/Home/Home';
import { Divider, Menu, useMediaQuery } from '@mui/material';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Foodmenu from './Pages/Foodmenu/Foodmenu';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  
  const isDesktop= useMediaQuery('(min-width:768px)');
  const [state, setState] = React.useState({
  
    left: false,
   
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const closeDrawer=()=>{
    setState({ ...state, left: false });
  }
  console.log(isDesktop)
  return (
    <BrowserRouter>
      <div className='app-container'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        {
          isDesktop && <>
          <Toolbar>
          <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
            <FastfoodIcon />
          
           My Resturant
          </Typography>
          <div className='header-menu'>
          <Link to={'home'}><Button color="inherit">Home</Button></Link>
          <Link to={'menu'}><Button color="inherit">Menu</Button></Link>
          <Link to={'about'}><Button color="inherit">About</Button></Link>
          <Link to={'contact'}><Button color="inherit">Contact</Button></Link>
          </div>
        </Toolbar>
          </>
        }
        {
          !isDesktop && <>
         <Toolbar>
          <IconButton
          color='inherit'
           aria-label="open-drawer"
            edge='start' 
            sx={{mr:1,display:{sm:'none'}}}
          onClick={toggleDrawer('left',true)}
          >
            
            <MenuIcon />
          </IconButton>
          <Drawer
           anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            
         
          >
            <div  className='header-mb-menu'>
            <Typography className='drawer-left' color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1,margin:2}}>
          
          <FastfoodIcon />
       
         My Resturant
        </Typography>
        <Divider/>
          <Link to={'home'} onClick={closeDrawer}><Button color="inherit">Home</Button></Link>
          <Link to={'menu'} onClick={closeDrawer}><Button color="inherit">Menu</Button></Link>
          <Link to={'about'} onClick={closeDrawer}><Button color="inherit">About</Button></Link>
          <Link to={'contact'} onClick={closeDrawer}><Button color="inherit">Contact</Button></Link>
          </div>

          </Drawer>
          <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
            <FastfoodIcon />
         
           My Resturant
          </Typography>
          
        </Toolbar>
          </>
        }
      </AppBar>
    </Box>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
     <Route path='/menu' element={<Foodmenu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<h1>Page not Found</h1>}/>
     </Routes>



      </div>
      
      
      
      </BrowserRouter>
    
  )
}

export default App