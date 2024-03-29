const Queue = require("./queue");

let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

function distribute(nums, queues, n, digit) {
	for (let i = 0; i < n; ++i) {
		if (digit == 1) {
			queues[nums[i]%10].enqueue(nums[i]);
		}
		else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}

function collect(queues, nums) {
	let i = 0;
	for (let digit = 0; digit < 10; digit++) {
		while(!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function dispArray(arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str += arr[i] + " ";
	}
	console.log(str);
}

let queues = [];
for (let i = 0; i < 10; i++) {
	queues[i] = new Queue();
}
let nums = [];
for (let i = 0; i < 10; i++) {
	nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log("Before redix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("After redix sort: ");
dispArray(nums);