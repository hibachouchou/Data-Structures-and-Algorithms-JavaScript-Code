console.log("Linked List");

class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}

class LinkedList {
    constructor(length = 0, head = null) {
        this.length = length;
        this.head = head;
    }

 size(){
    return this.length;
 }

 getHead(){
    return this.head;
 }

 add(element){
    let node = new Node(element)
    if(this.head===null){
        this.head=node
    }else{
        let currentNode = this.head;
        while (currentNode.next!==null){
            currentNode=currentNode.next
        }
        currentNode.next=node
    }
    this.length++
 }

 remove(element){
    // If the list is empty
    if(!this.head){
        return false
    }
    // If the head is what we want to remove
    else if(this.head.element === element){
        this.head = this.head.next
        this.length--
        return true
    }
    var current = this.head
    var previous = null
    while(current!==null && current.element !==element){
        previous=current
        current=current.next
    }
    // Element not found in the list
    if (!current){
        return false
    }
    // Remove current node and reassign next of previous as NULL
    previous.next=current.next
    this.length--
    return true
 }

 isEmpty(){
    return this.length===0;
 }

 indexOf(element){
    let current = this.head
    for (let i = 0; i < this.length; i++){
        if (current.element == element){
            return i 
        }
        current = current.next
    }
    return -1
 }

 elementAt(index) {
    if (index >= this.length || index < 0) {
        throw new Error("Index out of bounds");
    }
    var current = this.head;
    for (var i = 0; i < index; i++) {
        current = current.next;
    }
    return current;  // Return the node, not just the element
}

addAt(index, element) {
    if (index > this.length) {
        throw new Error("Index out of bounds");
    }
    var newNode = new Node(element);
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        var previousNode = this.elementAt(index - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }
    this.length++;
}


 removeAt(index){
    if (index >= this.length || index <0){
        throw new Error("Index out of bounds")
    }
    if(index===0){
        this.head = this.head.next
    }else{
        var previousNode = this.elementAt(index-1)
        previousNode.next = previousNode.next.next
    }
    this.length--
 }
 

print() {
    var arr = [];
    var current = this.head;
    while (current != null) {
        arr.push(current.element);
        current = current.next;
    }
    console.log(arr);
}
}

// Usage example:
let myLinkedList = new LinkedList();

console.log("Is the linked list empty?", myLinkedList.isEmpty()); // Output: true

myLinkedList.add(10);
myLinkedList.add(20);
myLinkedList.add(30);

console.log("Linked List size:", myLinkedList.size()); // Output: 3
console.log("Linked List head element:", myLinkedList.getHead().element); // Output: 10

console.log("Index of element 20:", myLinkedList.indexOf(20)); // Output: 1
console.log("Element at index 2:", myLinkedList.elementAt(2)); // Output: 30

myLinkedList.addAt(3, 15); // Add at the end of the list
console.log("Linked List after adding 15 at index 3:", myLinkedList.size(), myLinkedList.elementAt(3).element); // Output: 4 15

myLinkedList.removeAt(2);
console.log("Linked List after removing element at index 2:", myLinkedList.size(), myLinkedList.elementAt(2).element); // Output: 3 15

console.log("Linked List elements:");
myLinkedList.print(); // Output: [10, 20, 15]