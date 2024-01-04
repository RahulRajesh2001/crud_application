const express = require('express')
const productController=require('../controllers/productController.js')

const router = express.Router()

router.get('/add_product', productController.getAddProduct)

router.post('/add-product', (res, req, next) => {})

module.exports = router
