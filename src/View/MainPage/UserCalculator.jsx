import React from 'react';
import triangle from './UserCalculator.css';
import { Fade, Paper, Card, Typography, Input, TextField, Grid } from '@mui/material';


function UserCalculator() {

  return (

    <>
      <Paper elevation={1} sx={{ margin: '0 auto', maxWidth: '90%', padding: '2em' }}>
        <Typography variant='h1' sx={{ fontSize: '15vw' }}>
          Thinking of getting a loan?
        </Typography>
        <Grid sx={{ textAlign: 'center', textAlign: 'justify', justifyContent: "flex-end" }}>
          <Typography variant='h2' sx={{ fontSize: '2.5vw' }}>See how likely you are to get approved for a home loan.</Typography>
          <Typography variant='h3' sx={{ fontSize: '4.5vw' }}>
          I make roughly &nbsp;
          <Input 
            inputProps={{maxLength:10}} 
            sx={{ fontSize: '4.5vw', 
                  maxWidth: '10ch' }}
          /> 
           &nbsp;a year, and have&nbsp; 
          <Input 
            inputProps={{maxLength:10}}  
            sx={{fontSize: '4.5vw', 
                  maxWidth: '10ch'}}
          /> 
           &nbsp;in savings. My FICO credit score is&nbsp;
          <Input  
            inputProps={{maxLength:3}}
            sx={{fontSize: '4.5vw',
                  maxWidth: '3ch'}}
          />
           &nbsp;I expect to spend &nbsp;
          <Input 
            inputProps={{maxLength:10}}  
            sx={{fontSize: '4.5vw',
                  maxWidth: '10ch'}} 
          /> 
           &nbsp;a month on my mortgage payment, and I can put&nbsp; 
          <Input 
            sx={{fontSize: '4.5vw',
                  maxWidth: '10ch'}}
          /> 
           &nbsp;as a down payment.

          </Typography>
        </Grid>
      </Paper>

    <section class="triangle">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </section>
    </>

  )
}

export default UserCalculator;