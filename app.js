const express = require('express')
const session = require('express-session')
const nocache = require('nocache')
const bodyParser = require('body-parser')
const mongoconnect = require('./config/db.js')
const path = require('path')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT

// Connect to MongoDB
mongoconnect()

app.use(nocache())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

// Session configuration
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
)

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const errorController = require('./controllers/errorController.js')
const userRoutes = require('./routes/userRoute.js')

// Routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use('/api/v1', userRoutes)

// 404 error
app.use(errorController.get404)



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
