/* 

https://www.codewars.com/kata/529b418d533b76924600085d

 Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. 
 Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1); 

*/

function toUnderscore(string) {

    let split = string.toString().split('')
    const lowers = "abcdefghijklmnopqrstuvwxyz1234567890"
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = []
    
    for (let i = 0; i < split.length; i++) {
    
    if (split[i] === split[i].toUpperCase) {
    result += split[i].toLowerCase()
    } 
    
    else if (lowers.includes(split[i])
    &&
    uppers.includes(split[i + 1])) 
    { 
    result += (split[i] + '_')
    } else {
    result += split[i]
    }
    }
    return result
    }