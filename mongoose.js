// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const app = express()

// const student = require('./student')
// app.use(cors())

// mongoose.connect('mongodb://localhost:27017/mongooseDB',{
//     useNewUrlParser:true , useUnifiedTopology:true
// }, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('conected sucessfuly !!!');
//     }
// })

// app.get('/data' ,async (req , res)=>{
//     const data =await student.find()
//     console.log(data);
//     res.json(data)
// })
    
// app.post('/post_data' , async(req , res) =>{
//     // let data =  new student
//     // let result = await data.save()
//     // res.send(result)
//     // console.log(result);
//     res.status(200).json({
//         msg:"ok"
//     })
// })


// module.exports= app

