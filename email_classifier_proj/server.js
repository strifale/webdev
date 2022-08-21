const express = require('express'); //require includes modules in the app
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');

//Route files
const emails = require('./routes/emails');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express(); //initialize app variable with express

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


//mouting routers

app.use('/api/v1/emails', emails);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in 
${process.env.NODE_ENV} mode on port ${PORT}`)
);
