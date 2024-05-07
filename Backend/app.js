const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 5000;
const mongoDB = require('./db')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    
    next();
  })
  mongoDB();

app.use('/api', require("./routes/Signlog"))
app.use('/api', require("./routes/AddProduct"))
app.use('/api', require("./routes/ViewProdLists"))


app.get('/', (req, res) => {
    res.send("Hello World")
})



app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})