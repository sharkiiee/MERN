//signup
//8letter
//email

const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(8);


const app = express();
app.use(express.json());

const jwtpassword = "sid123";

mongoose.connect("url") //type ur url

function userCheck(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    const usernameResponse = usernameSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success ){
        res.status(404).json({
            msg:"wrong inputs"
        })
    }
    next();
}



app.post("/signup" ,userCheck,function(req,res){

     //how will i send authentication token when i signup it needs username and password.

    const signature = jwt.sign({},jwtpassword);
    
    const user = 
})

app.listen(3001);