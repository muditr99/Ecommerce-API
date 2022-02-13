const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');


// getting all
router.get('/products', homeController.list);
// creating one
router.post('/products/create', homeController.create);
// deleting one
router.delete('/products/:id', homeController.destroy);
// updating one
router.post('/products/:id/update_quantity', homeController.update);


module.exports = router;
