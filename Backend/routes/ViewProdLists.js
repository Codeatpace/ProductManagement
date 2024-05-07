const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

router.get('/readProdLists', async (req,res) => {
    try{
        let val = await Product.find({})
        res.send([val])
    }
    catch(e){
        res.json({success:false})
        console.log(e)
    }  
})

module.exports = router;