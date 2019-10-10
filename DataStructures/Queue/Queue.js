//Language: Javascript
//Author: Uddesh Jain
//Github: https://github.com/UddeshJain
class Queue {
    constructor() {
        this._storage = {}
        this._length = 0
        this._headIndex = 0
    }
    /* 
    * Enqueues a new value at the end of the Queue
    * @param {*} value - the value to enqueue
    */
    enqueue(value) {
        if (value) {
            this._storage[this._length + this._headIndex] = value
            this._length++
        }
    }
    /* 
    * Dequeues the value from the begning of the Queue and return it
   * @retuen {*} value - the first and oldest value in the Queue
    */
    dequeue() {
        if (this._length) {
            const firstValue = this._storage[this._headIndex]
            delete this._storage[this._headIndex]
            this._length--
            this._headIndex++
            return firstValue
        }
    }
}

const myQueue = new Queue()   // Creates new instance
myQueue.enqueue('zero')       // Adds the value in the end of Queue
myQueue.dequeue()             // Removes the value from first position of Queue
myQueue.enqueue('Two')        // Adds the value in the end of Queue