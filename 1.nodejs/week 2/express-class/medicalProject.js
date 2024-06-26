// 4.  Create a memory hospital.
// 	 -> Constraints :-
// 	 - You need to create 4 routes.
// 	 1. GET - User can check how many kidneys they have and their health.
// 	 2. POST - User can add new kidney.
// 	 3. PUT - User can replace a unhealthy kidney with healthy one.
// 	 4. DELETE - User can remove all the unhealthy kidneys.

const express = require("express");

const app = express();

app.use(express.json());

let users = {
    name:"sidharth",
    kidneys: [{
        healthy:false
    },{
    healthy: true
    },{
        healthy: true
    }]
}
// User can check how many kidneys they have and their health.

app.use(function(err,req,res,next){
    res.json({
        msg: "Sorry something is up with our server"
    })
})

app.get("/checkKidneys",function(req,res){
    const userName = users.name;
    const totalNoOfKidneys = users.kidneys.length;
    const healthyKidneys = (users.kidneys.filter((n)=> n.healthy)).length;
    const UnhealthyKidneys = totalNoOfKidneys - healthyKidneys;

    res.json({
        userName,
        totalNoOfKidneys,
        healthyKidneys,
        UnhealthyKidneys
    })
})

// User can add a new kidney
// taking kidney from body

app.post("/addKidney",function(req,res){
    const newKidney = req.body.kidney;
    users.kidneys.push(newKidney);
    res.json({
        msg: "kidney is been added"
    })
})

// User can replace a unhealthy kidney with healthy one.

app.put("/updateKidney",function(req,res){
    users.kidneys = users.kidneys.map(kidney => {
        if (!kidney.healthy) {
            return { healthy: true };
        }
        return kidney;
    });
    res.json({
        msg:"kidney is been updated"
    })
})

// User can remove all the unhealthy kidneys.

app.delete("/deleteKidney",function(req,res){
    const newKidneys = users.kidneys.filter((n)=>n.healthy);
    users.kidneys = newKidneys;
    res.json({
        msg:"Unhealthy kidneys are been removed"
    })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});


