// this is to connect to mongoDB server

var MongoClient = require('mongodb').MongoClient  , assert = require('assert') //this assert is required for nodejs internal testing

var aaaaa = 'mongodb://localhost:27017/firstnodeprojectusingmongodb'

MongoClient.connect(aaaaa, function(err,db){
    assert.equal(null, err)
    console.log('connected oyee ')

    var mycollection = db.collection('student')

    db.student.insert({
        name: "Tushar",
        class: "12th",
        roll: 25
    })
    
    db.student.insert({
        name: "Sahil",
        class: "12th",
        roll: 69
    })
    
    db.student.insert({
        name: "Aruna",
        class: "5th",
        roll: 89
    })
    
    db.student.insert({
        name: "Deepak",
        class: "7th",
        roll: 21
    })
    
    db.student.insert({
        name: "Charul",
        class: "9th",
        roll: 23
    })

    mycollection.insert([student],)


    db.close()
})