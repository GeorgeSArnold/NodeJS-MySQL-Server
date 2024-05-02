const express = require("express");
const router = express.Router();

router.get('/', (reg, res) => {
    res.render('index');
});

router.get('/register', (reg, res) => {
    res.render('register');
});

router.get("/login", (req, res) => {
    res.render("login");
});

module.exports = router;