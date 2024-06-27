// Insert the new user data into database taking from the user in the post:- "/signup" handler.
// - Define the userSchema for the user.
// - Do validation check the username should be email and password should have min 6 characters.
// - If the validation is false return "Invalid Input is been passed."

const express = require("express");
const zod = require("zod");
const { User } = require("./db")

const app = express();
app.use(express.json());

const userSchema = zod.string().email();
const passwordSchema = zod.number().min(6);

function userValidation(username,password){
  if(!userSchema.safeParse(username).success || !passwordSchema.safeParse(password).success)
    {
      return false;
    }
    else{
      return true;
    }
}

app.post("/signup",function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  if(!userValidation(username,password)){
    return res.json({
      msg: "Invalid Input is been passed."
    })
  }
  User.create({
    username,
    password
  })

  res.json({
    msg: "User is been inserted"
  })
})

const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`server is running on port :- ${PORT}`)
})