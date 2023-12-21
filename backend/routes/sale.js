const express = require('express');
const { newSale, getSales } = require('../controllers/saleController');
const router = express.Router();
const {isAuthenticatedUser } = require('../middlewares/authenticate');

//Sales routes
router.route('/sale/new').post(isAuthenticatedUser, newSale);
router.route('/sales').get(isAuthenticatedUser, getSales);

module.exports = router;