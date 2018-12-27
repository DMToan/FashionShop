const express = require('express');
const accountModel = require('../models/accountModel');
const restrict = require('../middle-wares/restrict');
const router = express.Router();

router.get('/', (req, res) => {
    //res.render('account/profile');
    if (res.locals.layoutVM.isLogged == true) {
        res.redirect('/');
    }
    else {
        res.redirect('/account/login');
    }
});

router.get('/login', (req, res) => {
    res.render('account/login');
});

router.post('/login', (req, res) => {
    var info = {
        user: req.body.input_user,
        pass: req.body.input_pass
    }
    console.log(info);
    accountModel.login(info).then (rows => {
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.user = rows[0];
            console.log(req.session.user);
            res.redirect('/');
        }
        else {
            res.redirect('/account');
        }
    })
});

module.exports = router;