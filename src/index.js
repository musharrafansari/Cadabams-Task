require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const route=require("./routes/route")
const cors = require('cors')
const app=express()

app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://musharrafansari:XY5t9CKinqT75evR@cluster0.xsylin5.mongodb.net/musharrafansaridb",{
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use(cors())
app.use('/', route)


app.listen(5000, function () {
console.log('Express app running on port ' + (5000))
})