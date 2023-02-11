import React from 'react'
import WithColor from '../components/WithColor'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Box } from '@mui/material';

const ColoredCard = WithColor(Card);

const HocTask = () => {

  // Add a color either with the name or hex code to dynamically add the cards
  const cards = ['Green', 'Red', 'Blue', '#25437c', '#33c279']
  
  return (
    <>
      <Box>
        <h2>HOC Colored Cards</h2>
        <Grid container spacing={4}>
          {cards.map((card, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <ColoredCard color={card.toLowerCase()}>
                  <CardContent>
                    <p>{card}</p>
                  </CardContent>
                </ColoredCard>
              </Grid>
            );
          })}
        </Grid>

      </Box>

    </>
  )
}

export default HocTask