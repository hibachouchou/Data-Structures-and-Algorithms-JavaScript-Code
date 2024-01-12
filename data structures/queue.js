console.log("Queues")


class Queue{
    constructor(){
  this.collections=[]
    }

print(){
    console.log(this.collections)
}
enqueue(element){
    //add item at the end of array
    return this.collections.push(element);
}
dequeue(){
   return this.collections.shift()
}
is_empty(){
    return this.collections.length ===0 ;
}
size(){
    return this.collections.length;
}
front(){
    return this.collections[0];
}
}

// Usage example:
let myQueue = new Queue();

console.log("Is the queue empty?", myQueue.is_empty()); // Output: true

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Queue after enqueue:", myQueue.print()); // Output: [1, 2, 3]
console.log("Queue size:", myQueue.size()); // Output: 3
console.log("Front of the queue:", myQueue.front()); // Output: 1

let removedElement = myQueue.dequeue();
console.log("Removed element from the queue:", removedElement); // Output: 1
console.log("Queue after dequeue:", myQueue.print()); // Output: [2, 3]
console.log("Is the queue empty?", myQueue.is_empty()); // Output: false