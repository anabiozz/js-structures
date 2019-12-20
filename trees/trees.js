function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data) {
	var n = new Node(data, null, null)
	if (this.root == null) {
		this.root = n;
	} else {
		let current = this.root;
		let parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

exports.BST = BST;
exports.inOrder = inOrder;