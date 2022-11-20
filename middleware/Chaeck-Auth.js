const JWT = require('jsonwebtoken')

module.exports = async (req , res , next)=>{
  let token = req.header('Authorization')
 if(!token){
    return res.status(402).json({
        msg :'No token Found'
    })
 }
 try {
     let token_data = token.split(' ')[1]
     let user = await JWT.verify(token_data ,'secret_key' )
    req.user = user.email
    next()
 } catch (error) {
    return res.status(400).json({
        msg :'Token Invalid'
    })
 }

}