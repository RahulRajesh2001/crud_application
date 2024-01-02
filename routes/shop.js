const express=require('express');

const router=express.Router();


router.get('/',(req,res)=>{
    res.send('<h1>hiii i am shop</h1>')
})


module.exports=router;