const express = require('express');
const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');
const router = express.Router();

router.get('/', (req, res) => {
    //console.log('cart: ',req.session.cart);
    var arr_p = [];
    for (var i = 0; i < req.session.cart.length; i++) {
        var cartItem = req.session.cart[i];
        var p = productModel.loadProduct(cartItem.id);
        arr_p.push(p);
    }
    var items = [];
    Promise.all(arr_p).then(result => {
        var totalPrice = 0;
        for (var i = result.length - 1; i >= 0; i--) {
            var pro = result[i][0];
            var item = {
                product: pro,
                quantity: req.session.cart[i].quantity,
                total: pro.price * req.session.cart[i].quantity
            };
            items.push(item);
            totalPrice = totalPrice + item.total;
        }

        var vm = {
            items: items,
            count: result.length,
            total: totalPrice
        };
        res.render('cart/cart', vm);
    });
});

router.post('/', (req, res) => {
    var ref = req.query.ref;
    if (ref == 'add') {
        var item = {
            id: req.body.id,
            quantity: +req.body.quantity
        };
        cartModel.add(req.session.cart, item);
        res.redirect(req.headers.referer);
    }
    else if (ref == 'remove') {
        cartModel.remove(req.session.cart, req.query.id);
        res.redirect(req.headers.referer);
    }
    else if (ref == 'update') {
        res.redirect(req.headers.referer);
    }
})

module.exports = router;