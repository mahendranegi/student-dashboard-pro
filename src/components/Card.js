import React from 'react'
import { CardStyle } from "../assets/styled";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



function CustomCard({data}) {
  console.log(data,'jjjkkk')
      const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <CardStyle>
         <Box className= "cardUi">
      {data.map((card, index) => (
        <Card key={card.id} style={{background: card.status === 'up' ? '#DEF1FB' : card.status === 'down' ? '#FBE5DF' : '',boxShadow: "0 8px 25px rgba(0,0,0,.08)"}}>
            <CardContent sx={{ height: '100%' }}>
              
              <Typography variant="h6" component="div" style={{display: 'flex',justifyContent: 'space-between'}}>
                {card.value}<span className={card.status === 'up' ? 'up common' : card.status === 'down' ? 'down common' : ''}>{card.percentage}</span>
              </Typography>
              <Typography variant="h6" component="div" style={{display: 'flex',gap: '4px',alignItems: 'center'}}>
                <span style={{color: '#E87254'}}>{card.icon}</span>{card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
        </Card>
      ))}
    </Box>
    </CardStyle>
  )
}

export default CustomCard