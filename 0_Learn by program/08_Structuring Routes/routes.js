const {Router} = require('express');
const router = Router();

let username = "sidharth";

router.get("/signup",function(req,res){
    res.json({
        username
    })
})

module.exports = router;