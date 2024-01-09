const express = require('express')
const path = require('path')
const productController = require('../controllers/productController.js')

const router = express.Router()

//route for the home page
router.get('/', productController.getAllProducts)

module.exports = router
