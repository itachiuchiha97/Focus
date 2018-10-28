var mongoClient = require('mongodb').MongoClient
var url = "mongodb//:localhost:27017/nodedb"

mongoClient.connect(url, function(err, db){
    if (err) throw err
    console.log("database created")
  
  db.close()
})