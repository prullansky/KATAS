/* 

https://www.codewars.com/kata/5a6225e5d8e145b540000127

Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
More examples in the test cases.

Good luck!

*/

function common(a,b,c){

    let total = 0
    
    a.map(number => {
    if (b.includes(number) && c.includes(number)) {
    
    total += number
    b.splice(b.indexOf(number),1)
    c.splice(c.indexOf(number),1)
    }
    })
    
    return total
    
    }