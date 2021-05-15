const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/users', mainController.list);
router.get('/users/:id', mainController.find);

module.exports = router;