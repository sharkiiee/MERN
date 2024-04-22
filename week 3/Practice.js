const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sarthak231203:saagrawal%40980@cluster0.wr1lefw.mongodb.net/");

const User = mongoose.model('users' , {name: String, username: String, password: String});

const user = new User({
    name:"Mohit",
    username:"savage",
    password: "marvel"
})

user.save();



