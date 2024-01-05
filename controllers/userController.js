const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  await res.render('register', { pageTitle: 'Register' });
};

exports.registerSubmit = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Password hashing
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.login = async (req, res) => {
  await res.render('login', { pageTitle: 'Login' });
};

exports.loginSubmit = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.redirect('/api/v1/login');
    } else {
      // Set session data
      req.session.user = user;
      res.redirect('/');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.logout = (req, res) => {
  // Destroy the session on logout
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
};
