import React, { useState } from 'react';
import Buyer from '../../lib/Buyer';
import triangle from './UserCalculator.css';
import { Fade, Paper, Card, Typography, Input, TextField, Grid } from '@mui/material';


function UserCalculator() {
  const [buyer, setBuyer] = useState(new Buyer);
  const [approved, setApproved] = useState(true);
  const [reasons, setReasons] = useState([]);

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
            onInput={(e) => {
              let newBuyer = buyer;
              newBuyer.income = Number(e.target.value);
              setBuyer(newBuyer);
              console.log(buyer);
              let reasons = buyer.check();
              setReasons(reasons);
              setApproved(reasons.length === 0);
            }}
            inputProps={{maxLength:10}} 
            sx={{ fontSize: '4.5vw', 
                  maxWidth: '10ch' }}
          /> 
           &nbsp;a year, and have&nbsp; 
          <Input 
            onInput={(e) => {
              let newBuyer = buyer;
              newBuyer.savings = Number(e.target.value);
              setBuyer(newBuyer);
              console.log(buyer);
              let reasons = buyer.check();
              setReasons(reasons);
              setApproved(reasons.length === 0);
            }}
            inputProps={{maxLength:10}}  
            sx={{fontSize: '4.5vw', 
                  maxWidth: '10ch'}}
          /> 
           &nbsp;in savings. My FICO credit score is&nbsp;
          <Input 
            onInput={(e) => {
              let newBuyer = buyer;
              newBuyer.credit = Number(e.target.value);
              setBuyer(newBuyer);
              console.log(buyer);
              let reasons = buyer.check();
              setReasons(reasons);
              setApproved(reasons.length === 0);              
            }} 
            inputProps={{maxLength:3}}
            sx={{fontSize: '4.5vw',
                  maxWidth: '3ch'}}
          />
           &nbsp;I expect to spend &nbsp;
          <Input 
            onInput={(e) => {
              let newBuyer = buyer;
              newBuyer.mortgage = Number(e.target.value);
              setBuyer(newBuyer);
              console.log(buyer);
              let reasons = buyer.check();
              setReasons(reasons);
              setApproved(reasons.length === 0);
            }} 
            inputProps={{maxLength:10}}  
            sx={{fontSize: '4.5vw',
                  maxWidth: '10ch'}} 
          /> 
           &nbsp;a month on my mortgage payment, and I can put&nbsp; 
          <Input 
            onInput={(e) => {
              let newBuyer = buyer;
              newBuyer.down_payment = Number(e.target.value);
              setBuyer(newBuyer);
              console.log(buyer);
              let reasons = buyer.check();
              setReasons(reasons);
              setApproved(reasons.length === 0);
            }} 
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