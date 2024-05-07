const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:'./Info.env'})
const DB = process.env.DB

const mongoDB = async () => {
    try{
        await mongoose.connect(DB);
        console.log("Connection Successful")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = mongoDB
