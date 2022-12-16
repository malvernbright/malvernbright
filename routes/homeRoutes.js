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
router.get('/webhook', homeController.webhook_get);
router.get('/messaging-webhook', homeController.messaging_webhook_get);

module.exports = router;