/**
 * https://adventofcode.com/2024/day/1
 * 
 * Given two lists such as:
 * 3   4
 * 4   3
 * 2   5
 * 1   3
 * 3   9
 * 3   3
 * 
 * Pair up the numbers and measure how far apart they are. Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.
 * 
 * Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances.
 */

let {first, second} = document.querySelector("pre").innerText.split("\n").filter(el => el).reduce((acc, curr, ind) => { 
    const [first, second] = curr.split('   ');
    acc.first.push(+first);
    acc.second.push(+second);

    return acc;
}, {first: [], second: []})

first.sort((a, b) => a - b)
second.sort((a, b) => a - b)

const totalPart1 = first.reduce((acc, curr, ind) => {
    acc += Math.abs(curr - second[ind]);

    return acc;
} , 0)


/**
 * Part 2:
 * 
 * Now find the total by multiplying the numbers of the first list by their frequency within the second list.
 * 
 * Using the previous example:
 * 3   4
 * 4   3
 * 2   5
 * 1   3
 * 3   9
 * 3   3
 * 
 * The total would be 3*3 + 4*1 + 2*0 + 1*0 + 3*3 + 3*3 = 31
 */

// Using the previous sorted arrays first and second:
const counts = first.map(el => {
    let count = 0;
    for (let i = 0; i < second.length; i++) {
        if (second[i] == el) {
            count++;
        } else if (second[i] > el) {
            break;
        }
    }

    return count;
});

const totalPart2 = first.reduce((acc, curr, ind) => {
    acc += curr * counts[ind]

    return acc;
} , 0)