/**
 * https://www.codewars.com/kata/55d17ddd6d7868493e000074
 * 
 * Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.
 * var listA = 1 -> 2 -> 3 -> null
 * var listB = 4 -> 5 -> 6 -> null
 * append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 * If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.
 */

// given by the challenge
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function append(listA, listB) {
    // Your code goes here.
    // Remember to return the head of the list.
    /*
     * My Approach
     * 1 check if lists are falsy
     * 1a if both are falsy, return null
     * 1b if one is falsy but the other is defined, return the defined
     * 2 if both are actual lists, iterate through the first list to find the last node and set it's 'next' property to be the head of the 2nd list
     * 3 return the first node of the first list (which is still the head of the new list)
     * time: O(n) where n is the size of listA
     * space: O(1) since i only introduced a variable to track a node.
    */
   
    if (!listA && !listB) return null
    if (!listA && listB) {
      return listB
    } else if (listA && !listB) {
      return listA
    }
  
    let currNode = listA
    while (currNode.next) {
      currNode = currNode.next
    }
    
    currNode.next = listB
    
    return listA
  }