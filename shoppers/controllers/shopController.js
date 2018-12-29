const express = require('express');
const productModel = require('../models/productModel');
const config = require('../config/config');
const router = express.Router();

router.get('/', (req, res) => {
    var proID = req.query.id;
    if (proID == null) {
        var page = req.query.page;
        if (!page) {
            page = 1;
        }
        var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
        var p1 = productModel.loadAll(offset);
        var p2 = productModel.countTotal();
        Promise.all([p1, p2]).then(([pRows, countRows]) => {
            var total = countRows[0].total;
            var nPages = total / config.PRODUCTS_PER_PAGE;
            if (total % config.PRODUCTS_PER_PAGE > 0) {
                nPages++;
            }

            var numbers = [];
            for (i = 1; i <= nPages; i++) {
                numbers.push({
                    value: i,
                    isCurPage: i === +page
                });
            }

            var vm = {
                products: pRows,
                noProducts: pRows.length === 0,
                page_numbers: numbers
            };
            //console.log(vm);
            res.render('shop/shop',vm);
        });
        
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