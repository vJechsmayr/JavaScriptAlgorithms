class Stack {
    constructor(items) {
        this.items = items || [];
    }

    push(e) {
        this.items.push(e);
    }

    pop(e) {
        if (!this.items.length) {
            return;
        }
        var popped = this.items.pop();
        return popped;
    }

    isEmpty() {
        return !!this.items && this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}


module.exports = Stack;

