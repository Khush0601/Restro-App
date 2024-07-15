import React from 'react'
import Footer from '../../Components/Footer'
import {Box, Divider, TableBody, TableContainer, Typography, useMediaQuery} from '@mui/material'
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
const Contact = () => {
  const isDesktop= useMediaQuery('(min-width:768px)');
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const tableColumn=[
    {

      name:<div style={{display:'flex',alignItems:'center'}}>
        <span><CloudQueueIcon style={{color:'red',marginRight:2}}/></span>
        <span>8666-9000-1234</span>
      </div>
    },
    {
      name:
      <div style={{display:'flex',alignItems:'center'}}>
        <span><EmailIcon style={{color:'blue',marginRight:2}}/></span>
        <span>ksingh1506@gmail.com</span>
      </div>
    },
    {
      name:
      <div style={{display:'flex',alignItems:'center'}}>
        <span><CallIcon style={{color:'green',marginRight:2}}/></span>
        <span>123456789</span>
      </div>
    }
  ]
  return (
    <div>
      <div>
        <Box sx={{margin:isDesktop?10:2}}>
          <Typography variant='h4'>
            Contact My Resturant
          </Typography>
          <Divider/>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
         
          </p>
        </Box>
        <TableContainer sx={{padding:isDesktop?10:2}} component={Paper} >
        <Table sx={{ minWidth: isDesktop?700:250 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell sx={{textAlign:'center'}}>Contact Details</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody >
              {
                tableColumn.map((el, i) => {
                  return <StyledTableRow sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", }} >
                          <StyledTableCell align="right">{el.name}</StyledTableCell>
                        </StyledTableRow>
                 })
              }
           
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact