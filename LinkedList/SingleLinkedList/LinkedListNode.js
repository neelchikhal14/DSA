// A Linked List Node

// Node is collection of data and pointer to next node

export default class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null; // next points to next node
  }

  toString(cb) {
    return cb ? cb(this.value) : `${this.value}`;
  }
}
