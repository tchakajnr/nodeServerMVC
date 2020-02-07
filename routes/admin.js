const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/add',(req,res,next)=>{
    res.render('add', {
        pageTitle: 'Add Product',
        path: '/add',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
});

router.post('/product',(req,res)=>{
    products.push({title: req.body.title});
    res.redirect('/');  
});

exports.routes = router;
exports.products = products;