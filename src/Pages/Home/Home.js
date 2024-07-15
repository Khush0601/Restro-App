import React from 'react'
import Footer from '../../Components/Footer'
import { Button, useMediaQuery } from '@mui/material';
import './Home.css'
import  foodBanner from '../../Assets/Image/foodBanner.jpg'
import { useNavigate } from 'react-router';
const Home = () => {
    const isDesktop= useMediaQuery('(min-width:768px)');
    const navigate=useNavigate()
    const onOrderClick=()=>{
     navigate('/menu')
    }
    console.log(isDesktop)
  return (
    <div className='home-cont' >
       <div className='home-header' style={{backgroundImage:`url(${foodBanner})`}} >
        <div className='home-des'>
        <h1>Food Website</h1>
         <p>Best Food In India</p>
        <Button  sx={{marginLeft:2}} variant="contained"  onClick={onOrderClick}>ORDER NOW</Button>
        </div>
        </div> 
       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default Home