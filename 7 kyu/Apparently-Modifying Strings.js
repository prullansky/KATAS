/*

https://www.codewars.com/kata/5b049d57de4c7f6a6c0001d7

For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).

If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.

If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

Examples:
Input 1

'It was great and I've never been on live television before but sometimes I don't watch this.'
Output 1

'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'
Input 2

'but apparently'
Output 2

'but apparently' 
(no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)



*/

function apparently(string) {

    let split = string.split(' ')
    let result = []
    
    for (let i = 0; i < split.length; i++) {
    if (split[i] === 'and' && split[i + 1] !== 'apparently') {
    result.push(split[i],'apparently')
    } else if (split[i] === 'but' && split[i + 1] !== 'apparently') {
    result.push(split[i], 'apparently')
    } else {
    result.push(split[i])
    }
    }
    
    return result.join(' ')
    
    }