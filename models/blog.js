const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  head: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

module.exports = mongoose.model('Blog', blogSchema)
