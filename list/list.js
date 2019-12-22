module.exports = class List {

	constructor() {
		this.size = 0;
		this.position = 0;
		this.dataStore = [];
	}

	append(element) {
		this.dataStore[this.size++] = element;
	}
	
	find(element) {
		for (let i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	}
	
	remove(element) {
		let foundAt = this.find(element);
		if (foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			this.size--;
			return true;
		}
		return false;
	}
	
	length() {
		return this.size;
	}
	
	toString() {
		return this.dataStore;
	}
	
	insert(element, after) {
		let insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos+1, 0, element);
			this.size++;
			return true;
		}
		return false;
	}
	
	clear() {
		delete this.dataStore;
		this.dataStore = [];
		this.size = this.position = 0;
	}
	
	contains(element) {
		for (let i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	}
	
	front() {
		this.position = 0;
	}
	
	end() {
		this.position = this.size-1;
	}
	
	prev() {
		if (this.position > 0) {
			this.position--;
		}
	}
	
	next() {
		if (this.position < this.size) {
			this.position++;
		}
	}
	
	currentPosition() {
		return this.position;
	}
	
	moveTo(position) {
		this.position = position;
	}
	
	getElement() {
		return this.dataStore[this.position];
	}
};