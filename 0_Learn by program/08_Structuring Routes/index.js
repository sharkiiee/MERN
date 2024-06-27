// connect your routes.

const express = require("express");
const Router = require("routes")

const app = express();
app.use(express.json());

app.use("/user",Router);
app.use("/admin",Router)

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})