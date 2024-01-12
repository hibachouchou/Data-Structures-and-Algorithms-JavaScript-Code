console.log("Priority Queues")


class PriorityQueue{
    constructor(){
  this.collections=[]
    }

printCollection(){
    console.log(this.collections)
}
enqueue(element){
    if (this.isEmpty()){
        this.collections.push(element);
        return;
    }else{
        var added=false;
        for(let i=0; i<this.collections.length;i++){
            if(element[1]< this.collections[i][1]){ // checking priorities
                this.collections.splice(i,0,element)
                added=true
                break;
            }
        }
    }
    if(!added){
        this.collections.push(element)
    }
}
dequeue(){
    if(this.isEmpty()) {
        throw new Error('Collection is empty !')
    }
    return this.collections.shift();
}
isFull(){
    return this.collections.length > 1 
}
isEmpty(){
    return this.collections.length ===0
}
getSize(){
    return this.collections.length
}
searchElement(element){
    for(let i=0; i<this.collections.length;i++){
        if(this.collections[i]===element) return true
    }
    return false
}
removeElement(element){
    let index=-1
    for(let i=0; i<this.collections.length;i++){
        if(this.collections[i]===element) index=i
    }
    if (index==-1) return false
    else{
        this.collections.splice(index,1)
        return true
    }
}
front(){
    return this.collections[0]
}
}

// Usage example:
let myPriorityQueue = new PriorityQueue();

console.log("Is the priority queue empty?", myPriorityQueue.isEmpty()); // Output: true

myPriorityQueue.enqueue(["Task 1", 3]);
myPriorityQueue.enqueue(["Task 2", 1]);
myPriorityQueue.enqueue(["Task 3", 2]);

console.log("Priority Queue after enqueue:", myPriorityQueue.printCollection());
// Output: [["Task 2", 1], ["Task 3", 2], ["Task 1", 3]]

console.log("Priority Queue size:", myPriorityQueue.getSize()); // Output: 3
console.log("Front of the Priority Queue:", myPriorityQueue.front()); // Output: ["Task 2", 1]

let removedTask = myPriorityQueue.dequeue();
console.log("Removed task from the Priority Queue:", removedTask); // Output: ["Task 2", 1]
console.log("Priority Queue after dequeue:", myPriorityQueue.printCollection());
// Output: [["Task 3", 2], ["Task 1", 3]]

console.log("Is the priority queue empty?", myPriorityQueue.isEmpty()); // Output: false