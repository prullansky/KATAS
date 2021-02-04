/*

https://www.codewars.com/kata/57f75cc397d62fc93d000059

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

*/



function calc(x){

    let total1 = ''
    
    for (let i = 0; i < x.length; i ++) {
    total1 += x[i].charCodeAt()
    }
    
    let total2 = total1.replace(/7/g, '1')
    
    let split1 = total1.split('')
    let final1 = 0
    let total1Sum = split1.map((number) => final1 += parseInt(number))
    
    let split2 = total2.split('')
    let final2 = 0
    let total2Sum = split2.map((number) => final2 += parseInt(number))
    
    return final1 - final2
    
    }