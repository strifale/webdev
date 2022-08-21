const express = require('express'); //require includes modules in the app
const dotenv = require('dotenv');
const { application } = require('express');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express(); //initialize app variable with express

//Following app methods are the various routes set up (get, post, put, delete)

app.get('/ap/v1/emails', (req, res) => {
  //res.send('<h1>Hello from express</h1>');
  //res.json({name : 'Sharvil'}); //sends json data
  //res.sendStatus(400); //sending a bad status
  //res.status(200).json({success : true, data : {id : 1}}); //better
  res.status(200).json({success : true, msg : 'show all emails'});
});

app.get('/ap/v1/emails/:id', (req, res) => { //gets a single email
    res.status(200).json({success : true, msg : `show email ${req.params.id}`});
  });

app.post('/ap/v1/emails', (req, res) => { //creates new email
    res.status(200).json({success : true, msg : 'create new email'});
  });

app.put('/ap/v1/emails/:id', (req, res) => { //updates emails
    res.status(200).json({success : true, msg : `update email ${req.params.id}`});
  });

app.delete('/ap/v1/emails/:id', (req, res) => { //deletes emails
    res.status(200).json({success : true, msg : `delete email ${req.params.id}`});
  });

const PORT = process.env.PORT || 5000;

app.listen(
  //https://www.geeksforgeeks.org/express-js-app-listen-function/
  PORT,
  console.log(`Server running in 
${process.env.NODE_ENV} mode on port ${PORT}`)
);


