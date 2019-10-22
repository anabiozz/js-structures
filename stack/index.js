const Stack = require("./stack");

let s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());

console.log("The popped element: " + s.pop());
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear()
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

function mulBase(num, base) {
	let s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while(num > 0);
	let converted = "";
	while(s.length() > 0) {
		converted += s.pop();
	}
	return converted;
}

let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

function isPalindrome(word) {
	let s = new Stack();
	for (let i = 0; i < word.length; i++) {
		s.push(word[i]);
	}
	let rword = "";
	while(s.length() > 0) {
		rword += s.pop();
	}
	if (word == rword) {
		return true;
	}
	return false;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

function factorial(n) {
	let s = new Stack();
	while(n > 1) {
		s.push(n--);
	}
	let product = 1;
	while(s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

console.log(factorial(5));
