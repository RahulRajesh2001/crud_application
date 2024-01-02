const express=require('express');
const bodyParser=require('body-parser')
require('dotenv').config();
const app=express();

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')


const PORT=process.env.PORT;
//body parser
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes);
app.use(shopRoutes)


app.listen(PORT,()=>{
    console.log("Server started 3000")
})