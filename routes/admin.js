const express=require('express');
const path=require('path')

const rootDirectory=require('../util/path.js')

const router=express.Router();

router.get('/add_product',(req,res,next)=>{
    res.render('add-product',{pageTitle:"Add product"})
})

router.post('/add-product',(res,req,next)=>{

})




module.exports=router;