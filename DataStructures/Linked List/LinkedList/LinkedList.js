const node = require('./Node');
let Node = node.Node;

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        if (this.head === null) {
            this.head = new Node(data);
            return;
        }

        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(data);
    }

    prepend(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
    }

    deleteWithValue(key, value) {
        if (this.head === null) return false;

        if (this.head.data[key] === value) {
            this.head = this.head.next;
            return true;
        }

        let currentNode = this.head;

        while (currentNode.next !== null) {
            if (currentNode.next.data[key] === value) {
                currentNode.next = currentNode.next.next;
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    getNodeWithValue(key, value) {
        if (this.head === null) return null;

        let currentNode = this.head;

        if (this.head.data[key] === value) {
            return this.head;
        }

        while (currentNode !== null) {
            if (currentNode.data[key] === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }
}

module.exports = {LinkedList: LinkedList}