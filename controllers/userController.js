const User = require('../models/userModel.js')
const bcrypt=require('bcrypt')

//for get register page
exports.register =async (req, res) => {
 await res.render('register', { pageTitle: 'Register' })
}

//for register Submit
exports.registerSubmit =async (req, res, next) => {
  const { name, email, password } = req.body

 // Password hashing
const salt=await bcrypt.genSalt(12);
const hashedPassword=await bcrypt.hash(password,salt)

  const user = new User({
    name,
    email,
    password:hashedPassword,
  })
  user.save()

  if (!user) {
    alert('Register properly')
  } else {
    res.redirect('/')
  }
}

//login
exports.login =async (req, res, next) => {
 await res.render('login', { pageTitle: 'Login' })
}
//for login user
exports.loginSubmit = async(req, res, next) => {
  const { email,password } = req.body

  try{
   const user=await User.findOne({email});
   if(user===null || !await bcrypt.compare(password,user.password)){
      res.redirect('/api/v1/login')
   }else{
      res.redirect('/');
   }
  }catch(err){
   console.log(err);
   res.status(500)
  }
  
}
