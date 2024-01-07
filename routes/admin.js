const express = require('express')
const userController = require('../controllers/userController.js')

const router = express.Router()

router.get('/dashboard', userController.getDashboard)
router.get('/delete/:id', userController.deleteUser)
router.get('/edit/:id', userController.editUserForm)
router.post('/edit/:id', userController.editUser)
router.get('/search', userController.searchUser)

module.exports = router
