const LinkedList = require('./LinkedList');

/* Manual unit testing */

const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
// ll.insertAtHead(10);
// ll.insertAtHead(20);

ll.print();
// ll.insertAtIndex(2, 60);
// ll.removeHead();
ll.removeAtIndex(2);
ll.print();
