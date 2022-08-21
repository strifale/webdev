const express = require('express');

const {
  getEmails,
  getEmail,
  createEmail,
  updateEmail,
  deleteEmail,
} = require('../controllers/emails');

const router = express.Router();

router.route('/').get(getEmails).post(createEmail);
router.route('/:id').get(getEmail).put(updateEmail).delete(deleteEmail);

module.exports = router;
