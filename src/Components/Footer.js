import React from 'react'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    const isDesktop= useMediaQuery('(min-width:768px)');
    console.log(isDesktop)
  return (
    <div>
       {
        isDesktop && 
        <>
         <Box sx={{textAlign:'center',bgcolor:'black',color:'white',padding:3,}}>
         <Box  className="" sx={{cursor:'pointer'}} >
          <InstagramIcon/>
        <TwitterIcon/>
           <GitHubIcon/>
           <YouTubeIcon/>
          </Box>
          

            <Typography variant='h5'>
           
          All rights reserved under@khush.resturant
            </Typography>
        </Box>
        </>
       }
       {
        !isDesktop && <>
        <Box sx={{textAlign:'center',bgcolor:'black',color:'white',padding:3}}>
        <Box  >
          <InstagramIcon/>
           <TwitterIcon/>
           <GitHubIcon/>
           <YouTubeIcon/>
          </Box>
            <Typography variant='h6'>
            All rights reserved under@khush.resturant
            </Typography>
        </Box>
        </>
       }
    </div>
  )
}

export default Footer