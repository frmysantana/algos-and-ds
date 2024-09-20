/**
 * https://neetcode.io/problems/minimum-stack
 * 
 * Design a stack class that supports the push, pop, top, and getMin operations.
 * 
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * Each function should run in O(1) time.
 */

/**
 * First attempt. Each stack function is a method of arrays, so I used that as a base.
 * 
 * The getMin() function has to just return a value to stay O(1), so I separated the
 * functionality of finding the minimum into an async function that is only called when needed
 */

class MinStack {
    stack = []
    min

    constructor() {}

    async setMin() {
        // technically this is O(n), but it's called asynchronously so it doesn't affect the performance
        // of other methods
        let localMin = Number.MAX_VALUE
        this.stack.forEach(num => {
            if (num < localMin) {
                localMin = num
            }
        })

        this.min = localMin
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (typeof val === "number") {
            this.stack.push(val)
        }

        if (!this.min) {
            this.setMin()
        } else if (val < this.min) {
            this.min = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop()

        if (this.min == val) {
            this.setMin()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
