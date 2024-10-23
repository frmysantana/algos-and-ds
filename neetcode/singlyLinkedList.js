/**
 * Design a Singly Linked List class.
 *
 * Your LinkedList class should support the following operations:
 * 
 * LinkedList() will initialize an empty linked list.
 * int get(int i) will return the value of the ith node (0-indexed). If the index is out of bounds, return -1.
 * void insertHead(int val) will insert a node with val at the head of the list.
 * void insertTail(int val) will insert a node with val at the tail of the list.
 * bool remove(int i) will remove the ith node (0-indexed). If the index is out of bounds, return false, otherwise return true.
 * int[] getValues() return an array of all the values in the linked list, ordered from head to tail.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// first attempt - incorrect; TODO: compare with correct to learn what was wrong
class LinkedList {
    head

    tail

    constructor() {
        this.head = new ListNode();
        // this.head = this.tail = tail;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index, toRemove = undefined) {
        let i = 0;
        let ithNode = this.head;

        while (i < index && typeof ithNode.value == "number" && ithNode.next) {
            ithNode = ithNode.next;
            i++;
        }

        if (i == index && typeof ithNode.value == "number") {
            return toRemove ? ithNode : ithNode.value;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        if (this.head.value) {
            const nextNode = this.head;

            this.head = new ListNode(val);
            this.head.next = nextNode;
        } else {
            this.head = new ListNode(val);
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if (this.tail) {
            const prevTail = this.tail;

            this.tail = new ListNode(val);
            prevTail.next = this.tail;
        } else if (this.head) {
            this.tail = new ListNode(val)

            if (this.head.next) {
                let lastLN = this.head.next
                while (lastLN.next) {
                    lastLN = lastLN.next
                }

                lastLN.next = this.tail
            } else if (this.head.value) {
                this.head.next = this.tail;
            } else {
                this.head = this.tail
            }
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index == 0) {
            if (this.head.next) {
                this.head = this.head.next

                return true
            } else if (this.head.value != null) {
                this.head.value = null

                return true
            }
        }

        const prevNode = this.get(index - 1, true)
        const nodeToRemove = this.get(index, true)

        if (prevNode == -1 || nodeToRemove == -1) {
            return false
        } else {
            prevNode.next = nodeToRemove.next

            return true
        }


        // let i = 0;
        // let ithNode = this.head;
        // let prevNode = ithNode;

        // while(i < index && !!ithNode.next) {
        //     if (i > 1) {
        //         prevNode = ithNode;
        //     }
        //     ithNode = ithNode.next;
        //     i++;
        // }

        // if (i == index) {
        //     if (ithNode.next) {
        //         prevNode.next = ithNode.next;

        //         return true
        //     } else if (ithNode.value) { // ithNode must be the tail
        //         prevNode.next = this.tail = null;
        //         return true;
        //     } else {
        //         //ithNode is initialized empty head - LL is technically size 0
        //         return false;
        //     }
        // } else {
        //     return false;
        // }
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let currNode = this.head;
        if (currNode.value === null) {
            return []
        }

        const values = [];
        values.push(currNode.value);

        do {
            currNode = currNode.next;
            values.push(currNode.value)
        } while (currNode.next)

        console.log(values)
        return values;
    }
}

// second attempt - correct
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    get(i) {
        if (i < 0 || i >= this.length) return -1;

        let current = this.head;
        for (let index = 0; index < i; index++) {
            current = current.next;
        }
        return current.val;
    }

    insertHead(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.length++;
    }

    insertTail(val) {
        const newNode = new ListNode(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    remove(i) {
        if (i < 0 || i >= this.length) return false;

        if (i === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let index = 0; index < i - 1; index++) {
                current = current.next;
            }
            current.next = current.next.next;
        }

        this.length--;
        return true;
    }

    getValues() {
        const values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }
        return values;
    }
}