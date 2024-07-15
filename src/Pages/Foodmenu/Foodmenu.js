import React from 'react'
import './Foodmenu.css'
import Footer from '../../Components/Footer'

import { MenuList } from '../../data/data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const Foodmenu = () => {
  return (
    <div>
      <div className='cards'>
      {
        MenuList.map((el,i)=>{
         return  <Card  key={`${el}-${i}`} sx={{ maxWidth: 345,margin:5}}>
         <CardMedia
           sx={{ height: 300 }}
           image={el.image}
          title={el.name}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
            {el.name}
           </Typography>
           <Typography variant="body2" color="text.secondary">
            {el.description}
           </Typography>
         </CardContent>
         <CardActions>
          <Typography>
           {el.price}
          </Typography>
         </CardActions>
       </Card>
        })
      }

      </div>
      <div><Footer/></div>
    </div>
  
  )
}

export default Foodmenu