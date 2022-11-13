
const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const DBName = 'UserData'
const client = new MongoClient(url)
const User_Account =async()=>{
    let data = await client.connect()
    let db = data.db(DBName)
    let collection = db.collection('UserAccounts')
    // let collection = db.collection('Users')
    let result= await collection.find().toArray()
    console.log(result);
    return collection
}
module.exports = User_Account
