//@ts-check
class Stack {
	constructor() {
		this.count = 0
		this.items = {}
	}
	size() {
		return this.count
	}
	isEmpty() {
		return this.count === 0
	}
	push(el) {
		this.items[this.count] = el
		this.count++;
	}
	pop() {
		if (this.isEmpty()) {
			return undefined
		}
		this.count--
		const result = this.items[this.count]
		delete this.items[this.count]
		return result
	}
	peek() {
		if (this.isEmpty()) {
			return undefined
		}
		return this.items[this.count - 1]
	}
	clear() {
		this.items = {}
		this.count = 0
	}
	toString() {
		if (this.count === 0) {
			return ''
		}
		let stackString = `${this.items[0]}`
		for (let i = 1; i < this.count; i++) {
			stackString = `${stackString},${this.items[i]}`
		}
		return stackString
	}
	
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.clear()
// stack.pop()
console.table(stack)

console.log(stack)
