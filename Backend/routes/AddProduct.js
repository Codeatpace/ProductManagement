const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

router.post('/addProd', (req,res) => {
    try{
        Product.create({
            prodID : req.body.prodID,
            prodName : req.body.prodName,
            prodColor : req.body.prodColor
        })
        res.json({success:true})
    }
    catch(err){
        res.json({success:false}).send("Server Error", e.message)
        
    }
})
module.exports = router;