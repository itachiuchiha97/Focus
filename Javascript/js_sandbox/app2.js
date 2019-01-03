var testingObject = {
    name: 'Sahil',
    age: 21,
    pObirth: 'Delhi',
    hobbies: ['tatti','khana','sona'],
    address: {
        houseNo: 'C-28',
        city: 'Delhi',
        pin: '110065'
    },
    getSurname: function(){
        return 'Does not exist'
    }
}

let val

val = testingObject.name
val = testingObject.hobbies[2]
val = testingObject.address.houseNo
val = testingObject.getSurname()
console.log(val)