const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const DBName = 'UserData'

const client = new MongoClient(url)
const User_data =async()=>{
    let data = await client.connect()
    let db = data.db(DBName)
    let collection = db.collection('Users')
    return collection
}

module.exports = User_data


