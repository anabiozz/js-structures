module.exports = class Queue {

	constructor() {
		this.dataStore = [];
	}

	enqueue(element) {
		this.dataStore.push(element);
	}

	dequeue() {
		return this.dataStore.shift();
	}

	priorityDequeue() {
		let priority = this.dataStore[0].code;
		for (let i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i].code < priority) {
				priority = i;
			}
		}
		return this.dataStore.splice(priority,1);
	}

	front() {
		return this.dataStore[0];
	}

	back() {
		return this.dataStore[this.dataStore.length-1];
	}

	toString() {
		let retStr = "";
		for (let i = 0; i < this.dataStore.length; i++) {
			retStr += this.dataStore[i] + "\n";
		}
		return retStr;
	}

	empty() {
		if (this.dataStore.length == 0) {
			return true;
		}
		return false;
	}
}