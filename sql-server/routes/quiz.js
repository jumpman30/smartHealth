const { Router } = require('express');
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz');



router.get('/:code', quizController.getQuiz);

router.post('/save', quizController.postSave);


module.exports = router;

