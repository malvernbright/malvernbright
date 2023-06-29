var express = require('express');
var router = express.Router();
var privacyController = require('../controllers/privacyPolicies');

/* GET home page. */
router.get('/privacy/aafm', privacyController.aafm);

module.exports = router;