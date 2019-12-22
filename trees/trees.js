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
	this.getMax = getMax;
	this.getMin = getMin;
	this.find = find;
	this.remove = remove;
	this.removeNode = removeNode;
}

function insert(data) {
	var node = new Node(data, null, null);
	if (this.root == null) {
		this.root = node;
	} else {
		let currentNode = this.root;
		let parentNode;
		while (true) {
			parentNode = currentNode;
			if (data < currentNode.data) {
				currentNode = currentNode.left;
				if (currentNode == null) {
					parentNode.left = node;
					break;
				}
			} else {
				currentNode = currentNode.right;
				if (currentNode == null) {
					parentNode.right = node;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (node != null) {
		inOrder(node.left);
		console.log(node.show());
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (node != null) {
		console.log(node.show());
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if (node != null) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show());
	}
}

function getMin() {
	let currentNode = this.root;
	while(currentNode.left != null) {
		currentNode = currentNode.left;
	}
	return currentNode.data;
}

function getMax() {
	let currentNode = this.root;
	while(currentNode.right != null) {
		currentNode = currentNode.right;
	}
	return currentNode.data;
}

function find(data) {
	let currentNode = this.root;
	while(currentNode.data != data) {
		if (data < currentNode.data) {
			currentNode = currentNode.left;
		}
		else {
			currentNode = currentNode.right;
		}
		if (currentNode == null) {
			return null;
		}
	}
	return currentNode;
}

function remove(data) {
	this.root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if (node == null) {
		return null;
	}
	if (data == node.data) {
		// node has no children
		if (node.left == null && node.right == null) {
			return null;
		}
		// node has no left child
		if (node.left == null) {
			return node.right;
		}
		// node has no right child
		if (node.right == null) {
			return node.left;
		}
		// node has two childern
		let tmpNode = getSmallest(node.right);
		node.data = tmpNode.data;
		node.right = removeNode(node.right, tmpNode.data);
		return node;
	}
	else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	}
	else {
		node.right = removeNode(node.right, data);
		return node;
	}
}

function getSmallest(node) {
	if (node.left == null) {
		return node;
	}
	return getSmallest(node.left);
}

exports.BST = BST;
exports.inOrder = inOrder;
exports.preOrder = preOrder;
exports.postOrder = postOrder;
exports.getMin = getMin;
exports.getMax = getMax;
exports.remove = remove;