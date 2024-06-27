const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sarthak231203:saagrawal%40980@cluster0.wr1lefw.mongodb.net/");

const userSchema = new mongoose.Schema({
    username:String,
    password:Number
})

const User = mongoose.model("usermain",userSchema);

module.exports = {User};