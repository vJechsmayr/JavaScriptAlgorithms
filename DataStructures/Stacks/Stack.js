//Language: Javascript
//Author: Uddesh Jain
//Github: https://github.com/UddeshJain
class Stack {
    constructor() {
        this._storage = {}
        this._length = 0
    }
    /* 
    * Adds a new value in the end of the Stack
   * @param {*} value - the value to push
    */
    push(value) {
        if (value) {
            this._storage[this._length] = value
            this._length++
        }
    }
    /* 
    * Removes the value at the end of stack and returns it
   * @return {*} the last and newest value in the Stack
    */
    pop() {
        if (this._length) {
            const lastValue = this._storage[this._length - 1]
            this._storage[this._length - 1] = undefined
            this._length--
            return lastValue
        }
    }
    /* 
    * Returns the value at the end of Stack without removing it 
   * @return {*} the last and newest value in Stack
    */
    peek() {
        return lastValue = this._storage[this._storage - 1]
    }
}

const myStack = new Stack()      // Creates new instance
myStack.push('First')           // Adds the value to the Stack
myStack.pop()                   // Removes the last value in Stack
myStack.peek()                 // Returns the last value in Stack