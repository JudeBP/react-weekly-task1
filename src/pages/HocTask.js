import React, { useState } from 'react'
import WithColor from '../components/WithColor'
import WithRandomColor from '../components/WithRandomColor';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Box, Button } from '@mui/material';

const ColoredCard = WithColor(Card);
const RandomColoredCard = WithRandomColor(Card);

const HocTask = () => {

  // Add a color either with the name or hex code to dynamically add the cards
  const cards = ['Green', 'Red', 'Blue', '#25437c', '#33c279']

  const [render, setRender] = useState(0);

  const reRender = () => {
    setRender(render + 1);
  }

  return (
    <>
      <h2>Colored Cards (HOC)</h2>
      <Box>
        <h3>Colored Cards Random Color <Button variant="contained" sx={{marginLeft: '10px'}} onClick={reRender}>Randomize</Button> </h3>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} >
            <RandomColoredCard>
              <CardContent>
                Random Color
              </CardContent>
            </RandomColoredCard>
          </Grid>
          <Grid item xs={12} md={6} >
            <RandomColoredCard>
              <CardContent>
                Random Color
              </CardContent>
            </RandomColoredCard>
          </Grid>
        </Grid>
        <h3>Colored Cards Fixed</h3>
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