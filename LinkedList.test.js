const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list (head)', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

// Test driven development
describe('#getByIndex', () => {
  describe('with index < 0', () => {
    test('It returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe('with index > list length', () => {
    test('It returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });
  describe('with index 0 (head)', () => {
    test('It returns the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });
  describe('with index in the middle', () => {
    test('It returns the element at that index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});
