const express = require('express');
const userModel = require('../models/userModel');
const orderModel = require('../models/orderModel');
const restrict = require('../middle-wares/restrict');
const router = express.Router();

router.get('/', (req, res) => {
    var action = req.query.ref;
    //console.log(action);
    if (action == 'login') {
        res.render('user/login');
    }
    else if (action == 'profile') {
        if (res.locals.layoutVM.isLogged === true) {
            userModel.load(res.locals.layoutVM.curUser.username).then(rows => {
                req.session.user = rows[0];
                var vm = {
                    User: rows[0]
                }
                //console.log(vm);
                res.render('user/profile', vm);
            });
        }
        else {
            res.redirect('/user');
        }
    }
    else if (action == 'history') {
        //console.log(req.query);
        var bill_id = req.query.id;
        if (res.locals.layoutVM.isLogged == true) {
            if (bill_id > -1) {
                orderModel.loadDetail(bill_id).then(rows => {
                    var count = 0;
                    var total = 0;
                    for (var i = 0; i < rows.length; i++) {
                        count++;
                        total += rows[i].price * rows[i].quantity;
                    }
                    var vm = {
                        items: rows,
                        count: count,
                        total: total
                    }
                    console.log(vm);
                    res.render('user/history-detail', vm);
                });
            }
            else {
                orderModel.loadAllByUser(req.session.user.id).then(rows => {
                    var vm = {
                        bills: rows
                    }
                    //console.log(vm);
                    res.render('user/history', vm);
                });
            }
        }
        else {
            res.redirect('/user');
        }
    }
    else {
        if (res.locals.layoutVM.isLogged == true) {
            res.redirect('/user?ref=profile');
        }
        else {
            res.redirect('/user?ref=login');
        }
    }
});

router.post('/', (req, res) => {
    var action = req.query.ref;
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
        if (res.locals.layoutVM.isLogged === true) {
            var pass1 = req.body.password;
            var pass2 = req.body.password2;
            if (pass1.length > 0) {
                if (pass1 === pass2) {
                    var newData = {
                        id: req.session.user.id,
                        password: pass2,
                        phone: req.body.phone,
                        email: req.body.email
                    }
                    userModel.updateInfo(newData).then(result => {
                        res.redirect('/user');
                    });
                }
            }
            else {
                var newData = {
                    id: req.session.user.id,
                    phone: req.body.phone,
                    email: req.body.email
                }
                userModel.updateInfo(newData).then(result => {
                    res.redirect('/user');
                });
            }
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