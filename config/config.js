const { MongoClient } = require("mongodb");
// R
const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri)

const database = client.db('foodstores')
const db = database

module.exports={db,client}