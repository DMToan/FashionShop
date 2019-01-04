const express = require('express');
const productModel = require('../models/productModel');
const config = require('../config/config');
const router = express.Router();

router.get('/', (req, res) => {
    var proID = req.query.id;
    if (proID == null) {
        var filter = req.query.filter;
        if (!(filter > 0)) {
            var page = req.query.page;
            if (!page) {
                page = 1;
            }
            var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
            var p0 = productModel.loadAllCategories();
            var p1 = productModel.loadAllOffset(offset);
            var p2 = productModel.countTotal();
            var p4 = productModel.loadAll();
            Promise.all([p0, p1, p2, p4]).then(([cate, pRows, countRows, items]) => {
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

                groups = [];
                for (var j = 0; j < cate.length; j++) {
                    var each = {
                        category: cate[j],
                        count: 0
                    }
                    for (var k = 0; k < items.length; k++) {
                        if (cate[j].id == items[k].cat_id) {
                            each.count += 1;
                        }
                    }
                    groups.push(each);
                }

                var vm = {
                    categories: groups,
                    products: pRows,
                    noProducts: pRows.length === 0,
                    page_numbers: numbers
                };
                //console.log(vm);
                res.render('shop/shop', vm);
            });
        }
        else {
            var page = req.query.page;
            if (!page) {
                page = 1;
            }
            var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
            var p0 = productModel.loadAllCategories();
            var p1 = productModel.loadAllByCategory(filter, offset);
            var p2 = productModel.countByCategory(filter);
            var p3 = productModel.loadAll();
            Promise.all([p0, p1, p2, p3]).then(([cate, pRows, countRows, items]) => {
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

                groups = [];
                for (var j = 0; j < cate.length; j++) {
                    var each = {
                        category: cate[j],
                        count: 0
                    }
                    for (var k = 0; k < items.length; k++) {
                        if (cate[j].id == items[k].cat_id) {
                            each.count += 1;
                        }
                    }
                    groups.push(each);
                }

                var vm = {
                    filter: req.query.filter,
                    current: req.query.page,
                    categories: groups,
                    products: pRows,
                    noProducts: pRows.length === 0,
                    page_numbers: numbers
                };
                res.render('shop/shop', vm);
            });
        }
    }
    else {
        productModel.loadProduct(proID).then (rows => {
            if (rows.length > 0) {
                productModel.loadSameBrand(rows[0]).then(same => {
                    var vm = {
                        thisProduct: rows[0],
                        sameProduct: same
                    }
                    res.render('shop/shop-single', vm);
                });
            }
            else {
                res.redirect('/shop');
            }
        });
        
    }
});

module.exports = router;