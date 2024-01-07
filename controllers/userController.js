const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
  await res.render('register', { pageTitle: 'Register' })
}

exports.registerSubmit = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    // Password hashing
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      name,
      email,
      password: hashedPassword,
    })

    await user.save()
    res.redirect('/')
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}

exports.login = async (req, res) => {
  await res.render('login', { pageTitle: 'Login' })
}

exports.loginSubmit = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.redirect('/api/v1/login')
    } else {
      // Set session data
      req.session.user = user
      res.redirect('/')
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}

// Destroy the session on logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
    }
    res.redirect('/')
  })
}

//for the get admin dashboard --admin
exports.getDashboard = async (req, res, next) => {
  const users = await User.find()
  await res.render('adminDashboard', { pageTitle: 'Dashboard', people: users })
}

//delete a user
exports.deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete({ _id: req.params.id })
  res.redirect('/admin/dashboard')
}

//Edit user form
exports.editUserForm = (req, res) => {
  res.render('edit', { pageTitle: 'Edit', user_id: req.params.id })
}

// for editing user
exports.editUser = async (req, res) => {
  const { email, name } = req.body
  await User.updateOne({ _id: req.params.id }, { name, email })
  res.redirect('/admin/dashboard')
}

// for seach a user
exports.searchUser = async (req, res) => {
  const { query } = req.query
  const users = await User.find({ name: { $regex: new RegExp(query, 'i') } })
  res.render('adminDashboard', { pageTitle: 'Search Results', people: users })
}
