// data > auth > controller.auth
// send data to auth contoller register

const express = require("express");
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/register', authController.register )

module.exports = router;