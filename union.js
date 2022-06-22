"use strict";
let data = 12;
function combined(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    else
        return a.toString() + b.toString();
}
console.log(combined(12, 45));
// console.log(combined('rohit','namdev'))
