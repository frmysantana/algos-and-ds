/*
 * Does singly-linked list contain a cycle?
 *
 * A singly-linked list is built with nodes, where each node has:
    node.next—the next node in the list.
    node.value—the data held in the node.
 * For example, if our linked list stores people in line at the movies,
 * node.value might be the person's name.
 *
For example:

  class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  let a = new LinkedListNode(5);
  let b = new LinkedListNode(10);

  let c = new LinkedListNode(11);

  a.next = b;
  b.next = c;


 * A cycle occurs when a node’s next points back to a previous node in the list.
 * The linked list is no longer linear with a beginning and end—instead, it cycles
 * through a loop of nodes.

 * Write a function containsCycle() that takes the first node in a singly-linked
 * list and returns a boolean indicating whether the list contains a cycle.
*/

const containsCycle = (linkedListHead) => {
  // If the list has a cycle, it will never end execution, and you will see cycles
  // of repeated values.

  let firstRunner = linkedListHead;
  let secondRunner = linkedListHead.next;

  while (secondRunner.next.next) {
    firstRunner = firstRunner.next;
    secondRunner = secondRunner.next;

    if (firstRunner.value === secondRunner.value) {
      return true;
    } 
      secondRunner = secondRunner.next;
      if (firstRunner.value === secondRunner.value) {
        return true;
      }
    
  }

  return false;
};
