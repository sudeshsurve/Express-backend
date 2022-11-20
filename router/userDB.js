
const router = require('express').Router()
const dbconnect =  require('../mongoDB_users')
const mongodb = require('mongodb')
const checkAuth = require('../middleware/Chaeck-Auth')


router.get("/all_users" ,checkAuth, async(req , res)=>{
        let data = await dbconnect()
   let result =  await data.find().toArray()
  res.send(result)
})

  
  router.post('/post_data',checkAuth ,async(req,res)=>{
      let data = await dbconnect()
      let result = await data.insertOne(req.body)
      res.json({msg :'succefull'})
  })
  
  router.delete('/:id' ,checkAuth, async(req, res)=>{
    let Id = req.params.id
    let data = await dbconnect()
    let result = await data.deleteOne({_id : new mongodb.ObjectId(Id)})
    res.status(200).send({msg:"succefull"})
     console.log(result)
  })
  
  router.put('/:id' ,checkAuth, async(req , res)=>{
    let Id = req.params.id
      let data = await dbconnect()
      let result = await data.updateOne({_id : new mongodb.ObjectId(Id)}, {$set :req.body})
  res.status(200).send(result)
  console.log(req.params)
  
  })
  
  router.get('/:id' ,checkAuth, async(req , res)=>{
  let Id = req.params.id
    let data = await dbconnect()
   let result =  await data.findOne({_id : new mongodb.ObjectId(Id)})
   console.log(result);
  res.send(result)
  })  


module.exports =  router