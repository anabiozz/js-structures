const {
	BST,
	inOrder,
	preOrder,
	postOrder,
} = require("./trees");

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("Preorder traversal: ");
preOrder(nums.root);
console.log("PostOrder traversal: ");
postOrder(nums.root);

console.log("min is " + nums.getMin());
console.log("max is " + nums.getMax());

console.log("found 34: " + nums.find(34));
console.log("found 37: " + nums.find(37).data);

nums.remove(3);
console.log("inorder traversal after removing 3: ");
inOrder(nums.root);