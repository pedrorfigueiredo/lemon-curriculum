const express = require('express');
const profileController = require('./controllers/profileController');

const router = express.Router();

router.get('/api/profile', profileController.getProfile);

module.exports = router;
