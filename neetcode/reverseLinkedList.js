// https://neetcode.io/problems/reverse-a-linked-list

// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list. <- this implies returning the new head of the reversed list

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0] <- this implies returning all of the values of the reversed list
// Example 2:

// Input: head = []

// Output: []

class Solution {
    reverseList(head) {
        const list = []
        let currNode = head;
        let count = 0;

        while (currNode.next) {
            // console.log({count, list, currNode})
            list.push(currNode)
            currNode = currNode.next
            count++
        }

        if (currNode.val) {
            list.push(currNode)
        }

        list.reverse().forEach((node, i) => {
            if (i < list.length - 1) {
                node.next = list[i + 1]   
            } else {
                node.next = null
            }
        })
        
        // unclear from the problem description what the final solution format should be and at the time there was a bug on the platform
        // that prevented me from running my code to see what the expected output was
        return {newBeginning: list[0], reversedListValues: list.map(node => node.val)};
    }
}