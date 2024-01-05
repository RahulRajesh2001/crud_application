const mongoose = require('mongoose')

function mongoconnect(){
    mongoose
  .connect('mongodb://localhost:27017')
  .then((response) => {
    console.log("mongodb connect successfully")
  })
  .catch((err) => {
    console.log(err)
  })
}

  module.exports=mongoconnect;