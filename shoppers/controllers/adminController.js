const express = require('express');
const restrict = require('../middle-wares/restrict');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/dashboard');
})

module.exports = router;