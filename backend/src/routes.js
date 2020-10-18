const express = require('express');
const profileController = require('./controllers/profileController');

const router = express.Router();

router.get('/api/profile', profileController.getProfile);
router.post('/api/profile', profileController.createProfile);

module.exports = router;
