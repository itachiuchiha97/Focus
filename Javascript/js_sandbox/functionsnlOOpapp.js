function greet(name) {
    return "Hello" + name
}
 
console.log(greet('Sahil')) 

const squareFunc = function(x){
    return x*x
}

console.log(`Square of 8 is ${squareFunc(8)}`)


for(let i = 0 ; i<10; i++){
    console.log(i)
}

const cars = ['Ford','Chevy','Honda','Aston','Miata']

for(let k = 0; k<cars.length; k++){
    console.log(cars[k])
}

//FOR EACH

cars.forEach(
    function(jksdnjands){
        console.log(jksdnjands)
    }
)

//MAP

const users = [
    {id: 1, name:'yo'},
    {id: 2, name:'yoyo'},
    {id: 3, name:'Honney'},
    {id: 4, name:'Singh'}
]

const names = users.map(function(naam){
    return naam.name
})

console.log(names)

users.forEach(function(user){
    console.log(`${user.id + 1000}`)
})


//FOR IN

const randomObject = {
    name: 'Enzo',
    owner: 'Ferrari',
    placeOfBirth: 'Italy'
}

for(x in randomObject){
    console.log(`${x} result is : ${randomObject[x]}`)
}


//PROPERTY METHODS

const todo = {
    add: function(){
        console.log('adds data in todo')
    },
    edit: function(){
        console.log('edit data in todo')
}
}

todo.add()
todo.edit()