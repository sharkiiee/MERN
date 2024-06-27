const mongoose = require('mongoose');

mongoose.connect("URL");

const userSchema = new mongoose.Schema({
    username:String,
    password:Number
})

const User = mongoose.model("usermain",userSchema);

module.exports = {User};