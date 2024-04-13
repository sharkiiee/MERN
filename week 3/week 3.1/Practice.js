//Program that checks username and password of the user --

const express = require("express");

const app = express();

app.use(express.json());

function usernameMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(!(username == "sarthak" && password == "pass")){
        res.status(403).json({
            msg:"user doesn't exist"
        })
    }
    
    next();
}

function kidneyIdMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(!(kidneyId == 1 || kidneyId == 2)){
        res.status(403).json({
            msg:"user doesn't exist"
        })
    }

    next();
}


app.get("/",usernameMiddleware,kidneyIdMiddleware,function(req,res){

    res.json("your heart is healthy")
})

app.listen(3001)