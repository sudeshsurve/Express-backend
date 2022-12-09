const router = require('express').Router()
const {check , validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const JWT = require("jsonwebtoken")
const DBconnect = require('./../mongoDB_accounts')
const {users} = require ('./userDB')

    

router.post('/signup' ,
[
    check('email').isEmail(),
    check('password').isLength({min : 6}),
    check('fullName').isLength({min : 3})
],
 async (req , res)=>{
    const data = await DBconnect()
    const{email , password , fullName} = req.body
    let error = validationResult(req)
     if(!error.isEmpty()){
        return res.status(400).json({
            msg :'email && password Invalid '
        })
     }
     const user = await data.findOne({email:email})

     if(user){
        return res.status(400).json({
            msg :'email already exists'
        })
     }    
   let hashPassword = await bcrypt.hash(password , 10)
   await data.insertOne({email , password:hashPassword , fullName})
//    users.push({email , password:hashPassword , fullname})
//    console.log(users);
   let token = await JWT.sign({email} ,'secret_key' )
      res.json({token})
})

router.post('/login' ,async (req , res)=>{
    const {email , password} = req.body
    const data = await DBconnect()
    let user = await data.findOne({email})
    if(!user){
           return res.status(200).json({
            msg :'Invalid Cradantial', user:false
           })
            }
    let isMatchpass  = await bcrypt.compare(password , user.password)
    console.log(isMatchpass)
    if(!isMatchpass){
                return res.json({
                 msg :'Invalid Cradantial',
                  user:false
                })
                 } 
                 let token = await JWT.sign({email} ,'secret_key')
                 res.json({token})

})


router.get('/all' , async(req , res)=>{
    try {
      let data = await DBconnect()
 let result =  await data.find().toArray()
res.send(result)   
    } catch (error) {
       res.json({
        "mesage" :'not found'
       }) 
    }
})  



module.exports = router
