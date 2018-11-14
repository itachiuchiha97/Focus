var obj = {
    name : "Sahil",
    age : 21,
    sex : "kaafi"
}

// to store it in string form

var jsonString = JSON.stringify(obj)

console.log(obj)
console.log()
console.log(jsonString)


//store in JSON

var testString  = '{"name":"Sahil","age":"324"}'//don't forget quotes
var jsonObject = JSON.parse(testString)
console.log(jsonObject)