/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newTail = new Node(val);
    if (this.length === 0) {
      this.head = newTail;
    } else {
      this.tail.next = newTail;
    }
    this.length += 1;
    this.tail = newTail;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.tail = newHead;
    } else {
      newHead.next = this.head;
    }
    this.length += 1;
    this.head = newHead;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (this.head === null) return null;

    let current = this.head;
    let prev;
    this.length -= 1;
    //Handle case where length = 1
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return current.val;
    }

    //Handle general case
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    prev.next = null;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return null;

    //Handle case where length = 1;
    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //Handle general case
      this.head = this.head.next;
    }

    this.length -= 1;
    return shifted.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error;

    let count = 0;
    let current = this.head;
    //[5, 10, 15]
    while (count < idx) {
      current = current.next;
      count++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error;

    let count = 0;
    let current = this.head;
    //[5, 10, 15]
    while (count < idx) {
      current = current.next;
      count++;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  // let lst = new LinkedList([5, 15]);

  // lst.insertAt(1, 10);
  // expect(lst.head.val).toBe(5);
  // expect(lst.head.next.val).toBe(10);
  // expect(lst.head.next.next.val).toBe(15);
  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error;

    let toInsert = new Node(val);
    if (idx === this.length) {
      this.push(val);
      return;
    }

    let prev = this.head;
    let current = this.head;
    let count = 0;

    while (count < idx) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = toInsert;
    toInsert.next = current;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error;

    if (idx === this.length - 1) {
      return this.pop();
    }

    if (idx === 0) {
      return this.shift();
    }

    let prev = this.head;
    let current = this.head;
    let count = 0;

    while (count < idx) {
      prev = current;
      current = current.next;
      count++;
    }
    this.length--;
    prev.next = current.next;

    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let count = 0;

    let current = this.head;

    while (count < this.length) {
      sum += current.val
      current = current.next;
      count++;
    }

    if (this.length === 0) return 0;
    return sum/count;
  }


  /** Reverse all values in place without returning a new Linked List. */
  // [1,2,3,4]
  reverseInPlace() {

    let headTemp = this.head;
    this.head = this.tail;
    this.tail = headTemp;

    let prev;
    let current = headTemp;
    let next = current.next;

    let count = 0;

    while (count < this.length) {
      prev = current;
      current = next;
      next = current.next;

      current.next = prev;

      debugger;
      count++;
    }

    this.tail.next = null;
  }
}

module.exports = LinkedList;
