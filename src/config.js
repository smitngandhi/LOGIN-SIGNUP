const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login");


connect.then(()=> 
{
    console.log("database connected Succesfully");

})
.catch(()=>
{
    console.log("Database cannot be connect");

})

const LoginSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("users",LoginSchema);

module.exports = collection;
