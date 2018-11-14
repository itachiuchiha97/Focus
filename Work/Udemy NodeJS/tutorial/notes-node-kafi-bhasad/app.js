console.log('starting app...')

const filesystem_variable = require('fs')
const operatingsys_variable = require('os')
const res = require('./notes.js') // ./ to let node know to search this directory
const _ = require('lodash') // a utility tool  

console.log(_.isString('asdasdasd')) //to know if its a string or not

var user = operatingsys_variable.userInfo()
console.log(user)
console.log(res)

var selfModule = res.addAnote()

filesystem_variable.appendFile('greetings.txt', `Hello chut ${user.username} `,function(err){ //or use appendfileSync to remove err wala quote
    //we have use ` for concatenation
    if (err){
        return console.log('gadbad')
    }
    console.log('Appended')
})

//adding two numbers from module 
console.log(`ye hai apna launda ${res.addition(65,4)}`)

var filtered_array = _.uniq(['sahil','sonu','yaya','sahil', 'monu']) //gives only unique array result
console.log(filtered_array)
