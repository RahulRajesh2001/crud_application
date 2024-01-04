const express = require('express');
const path = require('path');
const products = require("../books.js");

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop', {
        pageTitle: "Products",
        data: products, 
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;
