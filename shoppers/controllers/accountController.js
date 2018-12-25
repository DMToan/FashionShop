const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('account/profile');
    //res.redirect('/account/login');
});

router.get('/login', (req, res) => {
    res.render('account/login');
});

module.exports = router;