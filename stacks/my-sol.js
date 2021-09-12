class Stack {
  constructor() {
    this.stackArray = [];
    this.current = -1;
  }

  push(item) {
    this.current += 1;
    this.stackArray[this.current] = item;
  }

  pop() {
    if (this.current === -1) return null;

    const lastItem = this.stackArray[this.current];
    delete this.stackArray[this.current];
    this.current -= 1;
    return lastItem;
  }

  peek() {
    return this.stackArray[this.current];
  }

  get length() {
    return this.current + 1;
  }
}

// copied results statements from video sol
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.length);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
