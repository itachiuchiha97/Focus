console.log('Starting notes.js ...')

//exports are usd to export functionality of one module to othe app.js


module.exports.addAnote = () =>{
    console.log('add note')
    return 'new note'
}

module.exports.addition = (a,b) =>{
return a+b
}