
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		var inNode = new Node(value);

		if(this.root === null) 
			this.root = inNode;
		else 
			this._insertNode(this.root, inNode);
	}
	_insertNode(node, inNode) {
		if (inNode.value < node.value) {
			if (node.left === null) 
				node.left = inNode;
			else 
				this._insertNode(node.left, inNode);
		} else {
			if(node.right === null) 
				node.right = inNode; 
			else
				this._insertNode(node.right, inNode);
		}
	}
	getOrdered() {
		return this._order(this.root);
	}
	_order(node) {
		var a = [];
		if(node !== null) 
	    {
	    	a = a.concat(this._order(node.left)); 
	    	a.push(node.value); 
	    	a = a.concat(this._order(node.right)); 
	    }
	    return a;
	}

}

/*
var bstTest = new BST();
bstTest.insert(5);
bstTest.insert(20);
bstTest.insert(1);
bstTest.insert(15);
bstTest.insert(7);
bstTest.insert(9);
bstTest.insert(12);
bstTest.insert(40);
bstTest.insert(3);
var ordered = bstTest.getOrdered();
console.log(ordered);
*/