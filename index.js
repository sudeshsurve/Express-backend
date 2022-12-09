const express = require('express')
const auth = require('./router/auth')
const users = require('./router/userDB')
const core = require('cors')
const body_parser = require('body-parser')
const app = express()
app.use(core())
app.use(express.json())  
app.use(body_parser.json())
app.use('/auth' , auth)
app.use('/users' , users)
 

const port = process.env.PORT || 4000
app.listen(port ,()=>{
console.log(`listen on ${port}`);

})

  