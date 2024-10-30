/**
 * https://neetcode.io/problems/linked-list-cycle-detection
 * 
 * Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.
 * 
 * Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
 * 
 * Note: index is not given to you as a parameter.
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     * 
     * Approach:
     * - create an 'index' property on each node as you iterate through the linked list
     * - if you reach a node that already has an 'index' value, then you've found a cycle
     * time: O(n)
     * space: O(1)
     */
    hasCycle(head) {
        let node = head;
        let index = 0

        while (node && !node.index) {
            node.index = index
            index++
            node = node.next
        }

        if (node && !!node.index) {
            return true
        } else {
            return false
        }
    }
}