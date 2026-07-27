import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StudenStyle } from "../assets/styled";

function StudentInfo() {
  return (
    <Box sx={{ mt: 4}}>
    <StudenStyle>
      <div className= "flexRap">
        <span>1</span>
        <span>jdfjks</span>
      </div>
      <h2>hello</h2>
      <p>hii</p>
    </StudenStyle>
    </Box> 
  )
}

export default StudentInfo