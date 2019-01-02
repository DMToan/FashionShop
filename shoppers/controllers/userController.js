const express = require('express');
const userModel = require('../models/userModel');
const restrict = require('../middle-wares/restrict');
const router = express.Router();

router.get('/', (req, res) => {
    var action = req.query.id;
    //console.log(action);
    if (action == 'login') {
        res.render('user/login');
    }
    else if (action == 'profile') {
        if (res.locals.layoutVM.isLogged === true) {
            var vm = {
                User: res.locals.layoutVM.curUser
            }
            //console.log(vm);
            res.render('user/profile', vm);
        }
        else {
            res.redirect('/user');
        }
    }
    else {
        if (res.locals.layoutVM.isLogged == true) {
            res.redirect('/user?id=profile');
        }
        else {
            res.redirect('/user?id=login');
        }
    }
});

router.post('/', (req, res) => {
    var action = req.query.id;
    // login
    if (action == 'login') {
        var info = {
            user: req.body.input_user,
            pass: req.body.input_pass
        }
        //console.log(info);
        userModel.login(info).then (rows => {
            if (rows.length > 0) {
                req.session.isLogged = true;
                req.session.user = rows[0];
                //console.log(req.session.user);
                if (req.session.user.type == 1) {
                    res.redirect('/admin');
                }
                else {
                    res.redirect('/');
                    //res.redirect(req.originalUrl);
                }
            }
            else {
                res.redirect('/user');
            }
        });
    }
    // update profile
    else if (action == 'profile') {
        console.log('hello');
        if (res.locals.layoutVM.isLogged === true) {
            var vm = {
                User: res.locals.layoutVM.curUser
            }
            //console.log(vm);
            res.render('user/profile', vm);
        }
        else {
            res.redirect('/user');
        }
    }
    else if (action == 'logout') {
        req.session.isLogged = false;
        res.redirect('/');
    }
    else {
        res.redirect('/user');
    }
});

module.exports = router;