const express = require("express");
const app = express();

app.use(express.json());
const users= [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({
        msg:"change is been completed"
    });
})

app.delete("/",function(req,res){
    const newKidney = [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({
        msg: "kidney is been replaced"
    })
})


app.listen(3000);
