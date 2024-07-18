// Find Nth node from the end in linkedlist

// class List {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };

//     this.tail = this.head;
//     this.size = 1;
//   }

//   appendNode(nodeData) {
//     let newNode = {
//       value: nodeData,
//       next: null,
//     };

//     this.tail.next = newNode;
//     this.size += 1;
//     this.tail = newNode;
//   }

//   traversing() {
//     let counter = 0;
//     let currNode = this.head;

//     while (counter < this.size) {
//       console.log(currNode);
//       currNode = currNode.next;
//       counter++;
//     }
//   }
// }

// let list1 = new List(100);
// list1.appendNode(500);
// list1.appendNode(1000);
// list1.appendNode(1500);
// list1.traversing();
// console.log(list1);

// class List {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };

//     this.tail = this.head;
//     this.size = 1;
//   }

//   appendNode(nodeValue) {
//     let newNode = {
//       value: nodeValue,
//       next: null,
//     };

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size += 1;
//   }

//   findNthfromEnd(n) {
//     if (n > this.size) {
//       return null;
//     }

//     let main_ptr = this.head;
//     let ref_ptr = this.head;

//     for (let i = 0; i < n; i++) {
//       if (ref_ptr === null) {
//         return null;
//       }
//       ref_ptr = ref_ptr.next;
//     }

//     while (ref_ptr !== null) {
//       main_ptr = main_ptr.next;
//       ref_ptr = ref_ptr.next;
//     }

//     return main_ptr.value;
//   }
// }

// let list = new List(100);
// list.appendNode(200)
// list.appendNode(300)
// console.log(list.findNthfromEnd(2));
// console.log(list);
