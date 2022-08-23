const { Router } = require('express');
const express = require('express');
const router = express.Router();
const moodController = require('../controllers/mood');


router.post('/save', moodController.postSave);


module.exports = router;
