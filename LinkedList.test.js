const LinkedList = require('./LinkedList');

// Insertion at Head
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

// Get By Index
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

// Insertion at index
describe('#insertAtIndex', () => {
  describe('with index < 0', () => {
    test('It does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index > list length', () => {
    test('It does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index === 0', () => {
    test('Insert at the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.head.next.next.value).toBe(20);
      expect(ll.length).toBe(3);
    });
  });
  describe('with index in middle of the list', () => {
    test('Insert at the desired index', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(1, 30);
      expect(ll.head.value).toBe(10);
      expect(ll.head.next.value).toBe(30);
      expect(ll.head.next.next.value).toBe(20);
      expect(ll.length).toBe(3);
    });
  });
});
