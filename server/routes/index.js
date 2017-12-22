const express = require('express');
const artwork = require('./artwork');
const design = require('./design');

const router = express.Router();

router.use('/artwork', artwork);
router.use('/design', design);

module.exports = router;