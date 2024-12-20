/**
 * https://www.codewars.com/kata/5419cf8939c5ef0d50000ef2
 * 
 * Given n number of people in a room, calculate the probability that any two people in that room have the same birthday 
 * (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
 */

/*
 * time: O(1)
 * space: O(1)
*/
function calculateProbability(n) {
    let prob = 1;

    for (let i = 0; i < n; i++) {
        prob *= (365 - i) / 365;
    }

    const result = 1 - prob;

    return (Math.round(result * 100) / 100).toFixed(2);
}