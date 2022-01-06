// 队列实现
export class Queue {
  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
// queue.dequeue()
console.log(queue.toString())
console.log(queue.size())