/**
 * did not understand - study
 */
class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = { val: 0, next: null };
        let node = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                node.next = list1;
                list1 = list1.next;
            } else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }

        if (list1) {
            node.next = list1;
        } else {
            node.next = list2;
        }

        return dummy.next;
    }
}

/**
 * My Attempt
 * 
 * NeetCode provides a ListNode class
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * 
 * 1. declare separate list
 * 2. iterate through list1 and list2, comparing the current values of the list nodes
 * 3. the smaller list node value is saved into the separate list and that inputed list is iterated to the next value
 * 4. continue until both lists are empty
 * 5. return the final list
 * 
 * time: O(n), where n is the size of the larger linkedlist
 * space: O(1) Because i'm only tracking individual nodes
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) {
            return new ListNode('')
        }

        let newList = new ListNode(null)
        let head = new ListNode(null)
        let currNode 

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                currNode = new ListNode(list1.val)
                list1 = list1.next
            } else {
                currNode = new ListNode(list2.val)
                list2 = list2.next
            }

            if (newList.val == null) {
                head = currNode
                newList = currNode
            } else {
                newList.next = currNode
                newList = newList.next
            }
        }


        if (list1) {
            if (newList.val == null) {
                head = list1
                newList = list1
            } else {
                newList.next = list1
            }
        } else if (list2) {
            if (newList.val == null) {
                head = list2
                newList = list2
            } else {
                newList.next = list2
            }
        }

        return head
    }
}
