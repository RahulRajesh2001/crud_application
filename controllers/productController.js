const Book = require('../models/bookModel.js')

exports.checkAdmin = (req, res, next) => {
  if (!(req.session.user && req.session.user.role === "admin")) {
    return res.redirect('/');
  }
  next();
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
