const express = require('express');
const cartModel = require('../models/cartModel');
const orderModel = require('../models/orderModel');
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
        for (var i = 0; i < result.length; i++) {
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
        if (req.session.cart.length > 1) {
            cartModel.remove(req.session.cart, req.query.id);
        }
        else {
            req.session.cart = [];
        }
        res.redirect(req.headers.referer);
    }
    else if (ref == 'updated') {
        var id = req.query.id;
        console.log(id);
        var new_quantity = req.body.quantity;
        console.log(new_quantity);
        res.redirect(req.headers.referer);
    }
    else if (ref == 'confirm') {
        if (req.session.isLogged == true) {
            if (req.session.cart.length > 0) {
                orderModel.add(req.session.user.id).then(rows => {
                    orderModel.findLastest().then(result => {
                        var id = result[0].id;
                        for (var i = 0; i < req.session.cart.length; i++) {
                            orderModel.addDetail(id, req.session.cart[i]);
                        }
                        req.session.cart = [];
                        res.redirect('/');
                    });
                });
            }
            else {
                res.redirect('/cart');
            }
        }
        else {
            res.redirect('/user');
        }
    }
})

module.exports = router;