const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('<h1>Hello from express</h1>');
  //res.json({name : 'Sharvil'}); //sends json data
  //res.sendStatus(400); //sending a bad status
  //res.status(200).json({success : true, data : {id : 1}}); //better
  res.status(200).json({ success: true, msg: 'show all emails' });
});

router.get('/:id', (req, res) => {
  //gets a single email
  res.status(200).json({ success: true, msg: `show email ${req.params.id}` });
});

router.post('/', (req, res) => {
  //creates new email
  res.status(200).json({ success: true, msg: 'create new email' });
});

router.put('/:id', (req, res) => {
  //updates emails
  res.status(200).json({ success: true, msg: `update email ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  //deletes emails
  res.status(200).json({ success: true, msg: `delete email ${req.params.id}` });
});

module.exports = router;
