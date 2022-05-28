var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeControllers');

/* GET home page. */
router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);
router.post('/contact', homeController.contact);
router.get('/portfolio', homeController.portfolio);
router.get('/services', homeController.services);
router.get('/team', homeController.team);

module.exports = router;