const express = require("express");
const app = express();


const user = [{
    name: "John",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function(req,res){
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;
    res.json({
        johnKidneys,
        numberOfHealthyKidney,
        numberOfHealthyKidney
    } )
})

app.listen(3000);
