let data : number | string = 12



function combined(a : number | string,b : number | string){
    if( typeof a === 'number' && typeof b === 'number')return a + b
    else return a.toString() + b.toString()
}


console.log(combined(12,45))
// console.log(combined('rohit','namdev'))
