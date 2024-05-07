const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductSchema = new Schema({
    prodID : {
        type: Number,
        required: true
    },
    prodName : {
        type: String,
        required: true
    },
    prodColor : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('product', ProductSchema)