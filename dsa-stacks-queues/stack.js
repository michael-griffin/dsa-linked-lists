/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    let newTop = new Node(val);
    if (this.size === 0) {
      this.top = newTop;
    } else {
      let prevTop = this.top;
      this.top = newTop;
      newTop.next = prevTop;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error;
    let newTop = this.top.next;
    let toReturn = this.top.val;
    this.top = newTop;
    this.size--;
    return toReturn;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
