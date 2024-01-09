const express = require('express')
const userController = require('../controllers/userController.js')
const productController=require('../controllers/productController.js')

const router = express.Router()

router.get('/dashboard',productController.checkAdmin, userController.getDashboard)
router.get('/delete/:id',productController.checkAdmin, userController.deleteUser)
router.get('/edit/:id',productController.checkAdmin, userController.editUserForm)
router.post('/edit/:id',productController.checkAdmin, userController.editUser)
router.get('/search',productController.checkAdmin, userController.searchUser)

module.exports = router
