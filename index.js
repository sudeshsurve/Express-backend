const express = require('express')
const auth = require('./router/auth')
const users = require('./router/userDB')
// const dbconnect =  require('./mongoDB_users')
// const dbconnect2 = require('./mongoDB_accounts')
// const mongoobj = require('mongodb')
// const mongodb = require('mongodb')
const core = require('cors')
const body_parser = require('body-parser')
const app = express()
app.use(core())
app.use(express.json())  
app.use(body_parser.json())
app.use('/auth' , auth)
app.use('/users' , users)

//Users Account
// app.get('/get_user_account/:email/:password' , async(req , res)=>{

//   let email = req.params.email
//   let password = req.params.password
//   let data1 = req.params.id
//   let data = await dbconnect2()
//  let result =  await data.findOne({"email" : email, "password" : password})
//  console.log(result);
// res.send(result)
// })


// app.post('/create_user_account' ,async(req,res)=>{
//   let data = await dbconnect2()
//   let result = await data.insertOne(req.body)
//   res.send(result)
// console.log(result);
// })



// // CRUD
// app.get('/get_data' , async(req , res)=>{
//   let data = await dbconnect()
//  let result =  await data.find().toArray()
//  console.log(result);
// res.send(result)
// })  

// app.post('/post_data' ,async(req,res)=>{
//     let data = await dbconnect()
//     let result = await data.insertOne(req.body)
//     res.send(result)
// console.log(result);
// })

// app.delete('/:id' , async(req, res)=>{
//   let Id = req.params.id
//   let data = await dbconnect()
//   let result = await data.deleteOne({_id : new mongodb.ObjectId(Id)})
//   res.status(200).send({msg:"succefull"})
//    console.log(result)
// })

// app.put('/:id' , async(req , res)=>{
//   let Id = req.params.id
//     let data = await dbconnect()
//     let result = await data.updateOne({_id : new mongodb.ObjectId(Id)}, {$set :req.body})
// res.status(200).send(result)
// console.log(req.params)

// })

// app.get('/:id' , async(req , res)=>{
// let Id = req.params.id
//   let data = await dbconnect()
//  let result =  await data.findOne({_id : new mongodb.ObjectId(Id)})
//  console.log(result);
// res.send(result)
// })  
app.listen(4000 , console.log('sever start'))

  