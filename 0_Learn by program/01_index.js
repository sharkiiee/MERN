// 1. Create a in memory database having username and password.
// 2. User have to insert new user data hence they will insert their username and password.
// 3. Implement validation for insertion of username and password , username should be email and password should have min 8 characters.
// 4. If the constrainsts are wrong show invalid inputs.

const express = require('express');
const zod = require("zod");

const userSchema = zod.string().email();
const passwordSchema = zod.number().min(8);

const app = express();
app.use(express.json());

let USER_ID = [{
  username: "sarthak@gmail.com",
  password: 12345678
}]

function userValidator(username,password)
{
  const usernameValidator = userSchema.safeParse(username);
  const passwordValidator = passwordSchema.safeParse(password);

  if(!usernameValidator.success || !passwordValidator.success){
    return false;
  }
  else{
    return true;
  }
}

app.get("/users",function(req,res){

  })

app.post("/newUser",function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  if(userValidator(username,password)){
    USER_ID.push({username,password})
    res.json({
      USER_ID
    })
    }
    else{
      res.json({
        msg: "inputs are invalid"
      })
    }
    
})

app.listen(3000,()=>{
  console.log("server is running on port 3000")
});



