// WeakMap实现私有属性（缺点是拓展类时无法继承私有属性）
const items = new WeakMap()
class Stack {
  constructor() {
    items.set(this, [])
  }
  push(element) {
    const s = items.get(this)
    s.push(element)
  }
  pop() {
    const s = item.get(this)
    const r = s.pop();
    return r
  }
  // ...
}