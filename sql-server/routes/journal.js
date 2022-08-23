const { Router } = require('express');
const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journal');


router.post('/save', journalController.postSave);

router.get('/', journalController.getNotes);

router.post('/deactivate', journalController.deactivateNote);

module.exports = router;

