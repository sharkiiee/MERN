// Middlewares and global catches

// Before doing some operation onto the data 2 pre-checks are basically to be done

// 1.Authentication:- 
//          Making sure this person is logged in into the website or basically we hit the backend server and check for id password and other stuffs.

// 2.Input validation:- 
//          They are trying to implement the logic but have they send correct inputs.


// FOR CHECKING THIS PRE-CHECKS WE HAVE SOMETHING CALLED:- 
// ---------Middlewares----------

// The authentication data will be send in query parameters.

// example: For user kidney ,username , and password:-
// How to add contraints to our route 
// 1.User needs to send the kidneyId as the query param which should be a number from 1-2(humans only have two kidneys)
//localhost:3000?n=3000 //This n value here is the query parameter.
// 2.User should share his username and password into the header


//Program

const express = require("express");

const app = express();

app.get("./health-checkup",function(res,req){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!(username == "sarthak" && password == "pass")){
        res.status(400).json({"msg" : "Something up with your inputs"})
        return
    }

    if(!(kidneyId == 1 || kidneyId == 2)){
        res.status(400).json({"msg" : "Something up with your inputs"})
        return
    }

    //do something with kidney here
    res.json({
        msg: "your kidney is fine!"
    });
})

app.listen(3000);
