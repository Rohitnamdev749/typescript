// let data : any
// data = 20
// data = 'hello'


// let item : string

// item = data

// with unknown we don't assign into different type variable.

let data1 : unknown
data1 = 20
data1 = 'hello'


let item1 : string

// item1 = data1

if(typeof data1 === 'string'){
    item1 = data1;
}