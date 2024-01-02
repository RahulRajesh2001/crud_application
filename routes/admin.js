const express=require('express');

const router=express.Router();

router.get('/admin',(req,res)=>{
    res.send('<h1>Hi this is admin route</h1>')
})




module.exports=router;