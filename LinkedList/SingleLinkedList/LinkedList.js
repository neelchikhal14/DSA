import LLNode from './LinkedListNode.js';

export default class LinkedList {
  constructor() {
    // when LL is instatiated head is null
    this.head = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  /**
   * Checks if LL is empty or not
   * @return boolean
   */
  isEmpty() {
    return this.size === 0;
  }
  /**
   * Provides Length of LL
   * @return number
   */
  getSize() {
    return this.size;
  }

  /**
   * prepend is adding a new node at the start of LL
   *
   */
  prepend(value) {
    const node = new LLNode(value);
    // if the list empty to start with

    if (this.isEmpty()) {
      this.head = node;
    } else {
      // if the list of some size is already in existence

      node.next = this.head;
      this.head = node;
    }

    // update the size
    this.size += 1;
  }
  /**
   * prepend is adding a new node at the end of LL
   *
   */
  append(value) {
    // create a node
    const node = new LLNode(value);

    // if list is empty
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      console.log('current', current);
      current.next = node;
    }
    this.size++;
    console.log(this.head);
  }

  // insert a node at a prticular index
  insert(idx, value) {
    const node = new LLNode(value);
    if (idx < 0 || idx >= this.size) {
      console.log('Invalid Index, Out of range');
    } else if (this.size === 0 && idx > 0) {
      console.log('invalid index, LL is empty, idx cannot be greater than 0');
    } else if (idx === 0) {
      this.prepend(value);
    } else if (idx === this.size - 1) {
      this.append(value);
    } else {
      let counter = 0;
      let current = this.head;
      let previous = this.head;
      while (counter < idx) {
        previous = current;
        current = current.next;
        counter++;
      }
      previous.next = node;
      node.next = current;
      this.size += 1;
    }
  }
  // remove a node at a prticular index
  remove(idx) {
    if (idx < 0 || idx >= this.size) {
      console.log('Invalid Index, Out of range');
    } else if (this.size === 0 && idx > 0) {
      console.log('invalid index, LL is empty, idx cannot be greater than 0');
    } else if (idx === 0) {
      this.head = null;
      this.size = 0;
    } else {
      let counter = 0;
      let current = this.head;
      let previous = this.head;
      while (counter < idx) {
        previous = current;
        current = current.next;
        counter++;
      }
      // check if removal is at end index
      if (counter === this.size) {
        previous.next = null;
      } else {
        previous.next = current.next;
      }
      this.size -= 1;
    }
  }

  // printing the linked list
  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let current = this.head;

      let listValues = '';

      while (current.next !== null) {
        listValues += `${current.value} -> `;
        current = current.next;
      }
      listValues += `${current.value}  `;
      console.log(listValues);
    }
  }
}

// const myLL = new LinkedList();
// console.log(`Is the list Empty - ${myLL.isEmpty()}`);
// console.log(`The size of LL is- ${myLL.getSize()}`);
// // myLL.print();

// myLL.prepend(10);
// myLL.prepend(20);
// myLL.prepend(30);
// myLL.prepend(40);

// console.log(`Is the list Empty - ${myLL.isEmpty()}`);
// console.log(`The size of LL is- ${myLL.getSize()}`);

// myLL.print();

// myLL.append(10);
// myLL.append(20);
// myLL.append(30);
// myLL.append(40);
// myLL.append(50);

// console.log(myLL.getSize());
// myLL.print();

// myLL.insert(2, 200);
// myLL.insert(-2, 200);
// myLL.insert(6, 200);
// myLL.insert(5, 250);

// myLL.print();

// myLL.remove(6);
// myLL.print();
// myLL.remove(2);
// myLL.print();
