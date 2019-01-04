const express = require('express');
const restrict = require('../middle-wares/restrict');
const userModel = require('../models/userModel');
const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
    var ref = req.query.ref;
    if (ref == 'products') {
        productModel.loadAll().then(rows => {
            var vm = {
                products: rows
            }
            res.render('admin/products', vm);
        })
    }
    else if (ref == 'users') {
        userModel.loadAll().then(rows => {
            var vm = {
                users: rows
            }
            res.render('admin/users', vm);
        }) 
    }
    else if (ref == 'orders') {
        orderModel.loadAll().then(rows => {
            var vm = {
                bills: rows
            }
            res.render('admin/orders', vm);
        })
        
    }
    else {
        res.render('admin/dashboard');
    }
})

router.post('/', (req, res) => {
    var ref = req.query.ref;
    if (ref == 'logout') {
        req.session.isLogged = false;
        res.redirect('/');
    }
})

module.exports = router;