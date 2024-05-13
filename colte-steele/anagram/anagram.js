/**
 * Anagram Challenge of Section 5, Video 4
 * 
 * My attempt at the challenge before viewing the video
 * 
 * Problem:
 * 
 * Given 2 strings, write a funciton to determine if the second string is an anagram of the first. An Anagram is a word, phrace, or name formed by rearranging the letters of another, such as "cinema", formed from "iceman". 
 */

/**
 * First Attempt without going through the video.
 * Time: O(n) where n is the length of the longer string
 * Space: O(n) where n is the length of the longer string
 * 
 * @param {string} first 
 * @param {string} second 
 * @returns boolean
 */
function isAnagram(first, second) {
    // I will assume the strings don't have whitespace or numbers in them.
    if (typeof first !== "string" || typeof second !== "string" || first.length !== second.length) {
        return false
    }

    const firstWordLetterMap = makeLetterMap(first)
    const secondWordLetterMap = makeLetterMap(second)
    const boolArr = Array(Object.keys(firstWordLetterMap).length)
    for (key in firstWordLetterMap) {
        boolArr.push(secondWordLetterMap[key] === firstWordLetterMap[key])
    }

    return boolArr.every(b => b)
}

function makeLetterMap(word) {
    return word.split('').reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }

        return acc
    }, {})
}