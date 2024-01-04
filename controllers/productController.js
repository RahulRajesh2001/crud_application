
const products = require("../books.js");

//for adding product page
exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    })
  }

  //for getting all products
  exports.getAllproducts= (req, res, next) => {
    res.render('shop', {
        pageTitle: "Products",
        data: products, 
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}