// this is to connect to mongoDB server

var MongoClient = require('mongodb').MongoClient  , assert = require('assert') //this assert is required for nodejs internal testing

var aaaaa = 'mongodb://localhost:27017/firstnodeprojectusingmongodb'

MongoClient.connect(aaaaa, function(err,db){
    assert.equal(null, err)
    console.log('connected oyee ')
    db.close()
})