const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('_home/home');
});

router.get('/about', (req, res) => {
    res.render('_home/about');
});

router.get('/contact', (req, res) => {
    res.render('_home/contact');
});

module.exports = router;