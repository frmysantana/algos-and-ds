/**
 * https://www.codewars.com/kata/63ab271e96a48e000e577442
 * 
 * "Given a list walls closing in at you, can you make it past those walls without being hit?"
 * 
 * Input
 * walls: an array of 2-ples, each 2-ple storing non-negative numbers representing the distance of the walls closing in at you from each side (north, south) respectively to the center of the room.
 * 
 * Output
 * return a boolean indicating whether it is possible to run past the walls without being hit.
 * 
 * Specification
 * You stand at the west side of a rectangular room, right in the centre of the north and south side
 * Your goal is to reach the east side of the room
 * You can only move in a straight line across the room parallel to north and south side
 * Walls are closing in at you from both the north and south side of the room
 * Walls stop once they hit the center of the room (distance to north side = distance to south side)
 * You and the walls move at the same speed
 * You get hit by a wall if you are on the same tile as a wall
 * If a wall reaches a tile ahead of you, you cannot make it past that wall anymore
 * The distances of opposing walls in each 2-ple can differ
 * 
 * Input Constraints
 * 50 tests with 1 <= number of walls <= 4
 * 50 tests with 5 <= number of walls <= 15
 * 50 tests with 16 <= number of walls <= 50
 * 50 tests with 51 <= number of walls <= 100
 * 0 <= starting distance of walls to center of room <= 120
 */

function canEscape(walls) {
  return walls.reduce((acc, curr, i) => {
    if (curr.some(el => el <= i + 1) || acc == false) {
      return false;
    }

    return true;
  }, true);
}