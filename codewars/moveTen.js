/*
 * https://www.codewars.com/kata/57cf50a7eca2603de0000090
 * 
 * Move every letter in the provided string forward 10 letters through the alphabet.
 * 
 * If it goes past 'z', start again at 'a'.
 * 
 * Input will be a string with length > 0.
 * 
 * time O(n)
 * space O(1)
*/

const moveTen = (s) => s.split('').map(char => {
    const charCode = char.charCodeAt(0)
    let newCharCode = charCode + 10
    if (newCharCode > zCharCode) {
        newCharCode = newCharCode - zCharCode + aCharCode - 1
    }

    return String.fromCharCode(newCharCode)
}).join('')

const zCharCode = 122
const aCharCode = 97
