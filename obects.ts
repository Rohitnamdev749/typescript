const person:{name : string , age : number, email : string} = {
    name : 'Rohit Namdev',
    age : 24,
    email : 'abc@gmail.com'
}

console.log(person.name)
// second way to define object type "reusable object type"

type objtypes= {name : string , age : number, email : string}
const User: objtypes = {
    name : 'Rohit Namdev as user',
    age : 24,
    email : 'abcUser@gmail.com'
}

console.log(User.email)