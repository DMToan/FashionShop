const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
    var proID = req.query.id;
    if (proID == null) {
        res.render('shop/shop');
    }
    else {
        productModel.loadProduct(proID).then (rows => {
            if (rows.length > 0) {
                var vm = {
                    thisProduct: rows[0]
                }
                res.render('shop/shop-single', vm);
            }
            else {
                res.redirect('/shop');
            }
        });
        
    }
});

module.exports = router;