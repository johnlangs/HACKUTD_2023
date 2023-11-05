import React, { useState } from 'react';
import Buyer from '../../lib/Buyer';
import triangle from './UserCalculator.css'; 
import { Fade, Paper, Card, Typography, Input, TextField, Grid, Button, Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';


function UserCalculator() {
  const [buyer, setBuyer] = useState(new Buyer);
  const [approved, setApproved] = useState(null);
  let messagesEnd;

  const checkStatus = () => {
    console.log(buyer);
    if (buyer.check().length === 0) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }

  return (
    <>
      <section class="tilt" >
        <Paper elevation={0} sx={{ margin: '0 auto', maxWidth: '90%', padding: '2em', backgroundColor: "transparent" }}>
          <Typography variant='h1' sx={{ fontSize: '15vw' }}>
            Thinking of getting a loan?
          </Typography>
          <Grid sx={{ textAlign: 'center', textAlign: 'justify', justifyContent: "flex-end", justifyItems:"flex-end" }}>
            <Typography variant='h2' sx={{ fontSize: '2.5vw' }}>See how likely you are to get approved for a home loan.</Typography>
            <Typography variant='h3' sx={{ fontSize: '4.5vw' }}>
              I make roughly &nbsp;
              <Input
                onInput={(e) => {
                  let newBuyer = buyer;
                  newBuyer.income = Number(e.target.value);
                  setBuyer(newBuyer); 
                  console.log(buyer);
                }}
                inputProps={{ maxLength: 10 }}
                sx={{
                  fontSize: '4.5vw',
                  maxWidth: '10ch',
                }}
              />
              &nbsp;a month, and have&nbsp;
              <Input
                onInput={(e) => {
                  let newBuyer = buyer;
                  newBuyer.debt = Number(e.target.value);
                  setBuyer(newBuyer); 
                  console.log(buyer);
                }}
                inputProps={{ maxLength: 10 }}
                sx={{
                  fontSize: '4.5vw',
                  maxWidth: '10ch'
                }}
              />
              &nbsp;in monthly debt. My FICO credit score is&nbsp;
              <Input
                onInput={(e) => {
                  let newBuyer = buyer;
                  newBuyer.credit = Number(e.target.value);
                  setBuyer(newBuyer); 
                  console.log(buyer);
                }}
                inputProps={{ maxLength: 3 }}
                sx={{
                  fontSize: '4.5vw',
                  maxWidth: '3ch'
                }}
              />
              &nbsp;I expect to spend &nbsp;
              <Input
                onInput={(e) => {
                  let newBuyer = buyer;
                  newBuyer.mortgage = Number(e.target.value);
                  setBuyer(newBuyer); 
                  console.log(buyer);
                }}
                inputProps={{ maxLength: 10 }}
                sx={{
                  fontSize: '4.5vw',
                  maxWidth: '10ch'
                }}
              />
              &nbsp;a month on my mortgage payment, and I can put&nbsp;
              <Input
                onInput={(e) => {
                  let newBuyer = buyer;
                  newBuyer.mortgage = Number(e.target.value);
                  setBuyer(newBuyer); 
                  console.log(buyer);
                }}
                sx={{
                  fontSize: '4.5vw',
                  maxWidth: '10ch'
                }}
              />
              &nbsp;as a down payment.
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button style={{backgroundColor: '#049cdd', color: 'black'}} onClick={checkStatus}>
                  <Typography variant='h3' sx={{ fontSize: '4.5vw' }}>CHECK</Typography>
              </Button>
            </Box>
            <Typography style={{ marginTop: "150px" }}></Typography>
          </Grid>
        </Paper>
      </section >


  <div style={{ float:"left", clear: "both" }}
    ref={(el) => {messagesEnd = el; }}>
  </div>
  {approved === true && <section class="triangle">
  <Typography style={{ marginTop: "1550px" }}></Typography>
  <Grid container spacing={3} sx={{ margin: '0 auto', maxWidth: '90%', padding: '2em', backgroundColor: "transparent" }}>
    <Grid item xs={12}>
      <Typography variant='h1' sx={{ fontSize: '8vw' }}>
        Congratulations! You've been approved!
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        These are the factors used to come to a descion on your pre-approval.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h2' sx={{ fontSize: '3.5vw' }}>
        Debt to Income ratio
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        Your debt to income ratio is the percentage of your monthly income that goes toward paying your debt. Lenders prefer to see a debt to income ratio of 43% or less.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h2' sx={{ fontSize: '3.5vw' }}>
        Credit Score
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        Your credit score is a number that represents your creditworthiness. The higher your credit score, the more likely you are to be approved for a loan. It is made up of several factors, including your payment history, the amount of debt you have, and the length of your credit history.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h2' sx={{ fontSize: '3.5vw' }}>
        Down Payment
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        The down payment is the amount of money you pay upfront when you buy a home. The more you put down, the less you will have to borrow.
      </Typography>
    </Grid>
  </Grid>
</section>}
    {approved === false && <section class="triangle" style={{background:"red"}}>
  <Typography style={{ marginTop: "1550px" }}></Typography>
  <Grid container spacing={3} sx={{ margin: '0 auto', maxWidth: '90%', padding: '2em', backgroundColor: "transparent" }}>
    <Grid item xs={12}>
      <Typography variant='h1' sx={{ fontSize: '8vw' }}>
        Unfortunately, you have not been approved.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        Here are some factors that affected your pre-approval and how you can improve them.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h2' sx={{ fontSize: '3.5vw' }}>
        Debt to Income ratio
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        Your debt to income ratio is higher than preferred. Try to pay off some of your debt to lower this ratio.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h2' sx={{ fontSize: '3.5vw' }}>
        Credit Score
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        Your credit score is lower than preferred. Make sure to pay your bills on time and avoid taking on too much new debt to improve your credit score.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h2' sx={{ fontSize: '3.5vw' }}>
        Down Payment
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h3' sx={{ fontSize: '2.5vw' }}>
        Your down payment is lower than preferred. Try to save more money for your down payment.
      </Typography>
    </Grid>
  </Grid>
    </section>}
    </>
  )
}

export default UserCalculator;