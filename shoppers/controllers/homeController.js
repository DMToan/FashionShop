const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
    productModel.loadBestSeller().then(rows => {
        var vm = {
            products:rows
        }
        res.render('_home/home', vm);
    })
    
});

router.get('/about', (req, res) => {
    res.render('_home/about');
});

router.get('/contact', (req, res) => {
    res.render('_home/contact');
});

module.exports = router;