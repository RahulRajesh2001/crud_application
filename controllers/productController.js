
const products = require('../books.js');


// Middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/api/v1/login');
  }
};

// Get all products
exports.getAllProducts = (req, res) => {
  if (req.session.user) {
    res.render('shop', {
      pageTitle: 'Products',
      data: products,
      user:req.session.user
    });
  } else {
    res.redirect('/api/v1/login');
  }
};
