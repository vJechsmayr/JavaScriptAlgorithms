/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.front = [];
  this.back = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.front.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (!this.back.length) {
      while (this.front.length) {
          this.back.push(this.front.pop());
      }
  }
  return this.back.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (!this.back.length) {
      while (this.front.length) {
          this.back.push(this.front.pop());
      }
  }
  return this.back[this.back.length - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return !this.front.length && !this.back.length;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/