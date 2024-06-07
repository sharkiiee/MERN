//write code for the express "Hello World" - Creating your own server

const express = require('express')
const app = express()
const port = 3000

app.get('/sarthak', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})