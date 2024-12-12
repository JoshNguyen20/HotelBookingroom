const express = require('express');
const router = express.Router();
const recepController = require('../controller/recepController');


router.post('/booking', recepController.booking);


module.exports = router;