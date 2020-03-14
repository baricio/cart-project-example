var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Shopping";
var config = {useNewUrlParser: true, useUnifiedTopology: true}

module.exports = {
    connection: async () => await MongoClient.connect(url,  config)
}