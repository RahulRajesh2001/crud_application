const express=require('express');
const bodyParser=require('body-parser')
const mongoconnect=require('./config/db.js')
const path=require('path')
require('dotenv').config();
const app=express();


//connect mongodb
mongoconnect()

app.set('view engine','ejs');

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
const errorController=require('./controllers/errorController.js')
const userRoutes=require('./routes/userRoute.js')


const PORT=process.env.PORT;
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')))


//Routes
app.use('/admin',adminRoutes);
app.use(shopRoutes)
app.use('/api/v1',userRoutes)

//for the 404 error
app.use(errorController.get404)


app.listen(PORT,()=>{
    console.log("Server started 3000")
})


