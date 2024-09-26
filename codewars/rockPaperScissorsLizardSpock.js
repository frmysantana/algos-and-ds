/**
 * https://www.codewars.com/kata/57d29ccda56edb4187000052
 * 
 * In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:
 * 
 * Scissors cuts Paper
 * Paper covers Rock
 * Rock crushes Lizard
 * Lizard poisons Spock
 * Spock smashes Scissors
 * Scissors decapitates Lizard
 * Lizard eats Paper
 * Paper disproves Spock
 * Spock vaporizes Rock
 * Rock crushes Scissors
 * Task:
 * Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
 * 
 * Inputs
 * Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
 */

/*
- each value decidedly wins or losses agains all other values
- the only possibility of a draw is if both players use the same value

1. check if both users have used the same value and return 'Draw!'
2. use a map of each item where the item is the key and the value is 
a map itself that contains the outcome of a pairing with all other items

time: O(1)
space: O(1)
*/

function rpsls(pl1, pl2) {
    if (pl1 == pl2) {
        return 'Draw!'
    }


    if (wins[pl1][pl2] !== undefined) {
        return "Player 1 Won!"
    } else {
        return "Player 2 Won!"
    }
}

const wins = {
    "rock": {
        "scissors": true,
        "lizard": true,
    },
    "paper": {
        "rock": true,
        "spock": true,
    },
    "scissors": {
        "paper": true,
        "lizard": true,
    },
    "lizard": {
        "paper": true,
        "spock": true,
    },
    "spock": {
        "rock": true,
        "scissors": true,
    }
}