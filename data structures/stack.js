console.log("Stack")
// Example 1
class Stack{

    constructor(letters, word,reversedWord) {
        this.letters = letters;
        this.word = word;
        this.reversedWord=reversedWord
      }
    
      //put letters of word onto stack
      pushToStack() {
        for (var i=0;i<this.word.length;i++){
            this.letters.push(this.word[i])
       }
      }

    //pop off the stack in reverse order

      popFromStack(){
        while(this.letters.length){
            var temp =this.letters.pop()
            this.reversedWord+=temp
        }
        if(this.reversedWord===this.word){
            console.log(this.word+" is a palindrome")
        }else{
            console.log(this.word+" is not palindrome")
        }
        return this.reversedWord
      }
       
    


}

// Example usage:
const myStack = new Stack([], "racecar", "");

myStack.pushToStack();
const reversed = myStack.popFromStack();
console.log("Reversed Word: " + reversed);

// Example usage2:
const myStack2 = new Stack([], "Hiba", "");

myStack2.pushToStack();
const reversed2 = myStack2.popFromStack();
console.log("Reversed Word: " + reversed2);


//Example 2

class Stack1{

    constructor(storage, count) {
        this.storage = storage;
        this.count = count;
      }
    // adds a value onto the end of the stack
      pushToStack(value){
       this.storage[this.count]=value
       this.count++
      }
     //removes and returns the value at the end of the stack
      popFromStack(){
        if(this.count===0){
            return undefined
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result
      }

      
      SizeStack(){
        return this.count
      }

      // returns the value at the end of the stack
      PeekStack(){
        return this.storage[(this.count-1)]
      }

}
// Example usage:
const myStack3 = new Stack1([], 0);

myStack3.pushToStack("hello");
myStack3.pushToStack("hi");
myStack3.pushToStack("bye");
const size=myStack3.SizeStack()
console.log(size)
const deleted_item=myStack3.popFromStack()
console.log(deleted_item)
console.log(myStack3.PeekStack())

