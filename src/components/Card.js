import React from 'react'
import { CardStyle } from "../assets/styled";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
const cards = [
  {
    id: 1,
    title: 'Plants',
    description: 'Plants are essential for all life.',
  },
  {
    id: 2,
    title: 'Animals',
    description: 'Animals are a part of nature.',
  },
  {
    id: 3,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
  },
  {
    id: 4,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
  },
];


function CustomCard() {
      const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <CardStyle>
         <Box className= "cardUi">
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </CardStyle>
  )
}

export default CustomCard