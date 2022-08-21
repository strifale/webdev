const express = require('express'); //require includes modules in the app
const dotenv = require('dotenv');
const { application } = require('express');

//Route files
const emails = require('./routes/emails');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express(); //initialize app variable with express

//mouting routers

app.use('/api/v1/emails', emails);

const PORT = process.env.PORT || 5000;

app.listen(
  //https://www.geeksforgeeks.org/express-js-app-listen-function/
  PORT,
  console.log(`Server running in 
${process.env.NODE_ENV} mode on port ${PORT}`)
);
