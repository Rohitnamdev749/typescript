function combinedlit(a : number | string,b : number | string, type : 'as-number' | 'as-string'){
    if( type === 'as-number')return +a + +b
    else return a.toString() + b.toString()
}


console.log(combinedlit(12,45, 'as-number'))
console.log(combinedlit('rohit','namdev','as-string'))
