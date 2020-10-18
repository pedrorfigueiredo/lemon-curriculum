const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.send('hi');
});

module.exports = router;
