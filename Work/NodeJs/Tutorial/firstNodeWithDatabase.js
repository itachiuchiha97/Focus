// this is to connect to mongoDB server

var MongoClient = require('mongodb').MongoClient  , assert = require('assert') //this assert is required for nodejs internal testing

var aaaaa = 'mongodb://localhost:27017/firstnodeprojectusingmongodb'

MongoClient.connect(aaaaa, function(err,db){
    assert.equal(null, err)
    console.log('connected oyee ')

    var mycollection = db.connect('student')

    db.student.insert({
        name: "Tushar",
        class: "12th",
        roll: 25
    })
    
    db.student.insert({
        name: "Sahil",
        class: "15th",
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

    var rand1 = {name:"Pomila", bobay:46, age:"marad"} 

    mycollection.insert([student,rand1],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log("Docs Inserted", result.length, result)
        }

        db.close()
    })
})