const Book = require('../models/bookModel.js')

// Middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.session.id) {
    next()
  } else {
    res.redirect('/api/v1/login');
  }
}

// Get all products
exports.getAllProducts = async (req, res) => {
  const books = await Book.find()
  if (req.session.user) {
    res.render('shop', {
      pageTitle: 'Products',
      data: books,
      user: req.session.user,
    })
  } else {
    res.redirect('/api/v1/login')
  }
}
