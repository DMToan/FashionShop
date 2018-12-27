const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var proID = req.query.id;
    if (proID == null) {
        res.render('shop/shop');
    }
    else {
        res.render('shop/shop-single');
    }
});

module.exports = router;