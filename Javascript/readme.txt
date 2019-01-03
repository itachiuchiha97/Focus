(Live Server) : Extension for VScode 
<script> : tags to run JS code
to link files: <script src="app.js"></script> // put in body tag
fn + F12 : opens console // execute JS there
//we can do everything from console that we may wish to when using file.js
var/let/const : to create a variable - cannot reassign in case of 'const' -- let is scope defined -- var is global
[1,2,3,4] : an array
{a:2, b:3} : an object
console.table() : to display object  in table
arrayname.push(6) : to add a numeber to array
references are in heap //can't access directly from code. As a programmer we define it using pointer such that when program needs extra memory it gets it from there
primitive data types in stack //memories are defined here
val = String(2) also Number(str) works //treats this a s a string explicitly
x.toString() //exists
x.toFixed() // inside brackets come number of decimal places
vaada = Math.round(), Math.PI, floor ceil, pow, min, max , random
takes out letter from string like taking array indexes
firstame[1]
also firstame.indexOf('k')
.charAt : returns the chraxc at that posn
.substring(strt,ennd)
fnme.split(' ') // splits string at spaces and saves it in an array
fname.replace(this, from this)
.includes('foo')

arrays
const a = [1,2,3,4,5]
or 
const a = new Array(1,2,3,4,5)

.isArray : to check for an array 
.push() : to add end of array
.unshift() :to add to first value
.pop() : to take number off from end
.shift() : from front
.splice(start index,end index) : 
.reverse() : to reverse the array
a.concat(b) : to concat 2 arrays
.sort() 
function under3(tatti){ : fn defn
return tatti < 5
}
//NOte: always call function name with paranthesis

var dosomethin = somevariable.find(under3)

OBJECT LITERALS
val gobar = {
    key : value
    key2 : 'value2'
}
 

.getTime() : since 1 jan 1970

 we can run multiple scripts in one webpage // in console it shows from which scipt function is actually executing

 //IF 
 same syntax, === : checks both value and type 

use ``when using dollar sign


const squareFunc = function(x){
    return x*x
}

console.log(`Square of 8 is ${squareFunc(8)}`)

.forEach(function(){
    return aijdajdfp
})



//ADDING DYNAMIC DATA TO PAGES
//USING TEMPLATE STRINGS ``

webPage_NewSyntaxed = `
<ul>
    <li> Name: ${name} </li>
    <li> Age: ${age} </li>
    <li> Location: ${addresssss}</li>
</ul>
`

document.body.innerHTML = webPage_NewSyntaxed


//REFER TO FUNCTIONSANDLOOP.JS AND WINDOWOBJECT.JS FOR BETTER

//Continously update wali window chahiye toh Events use kro bhsdk 

//refer js_sandbox-dom-manipulations