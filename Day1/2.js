//Stack

var Stack = function(){
    this.count = 0;
    this.storage = {};


    this.push = function(value){
        this.storage[this.value] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count == 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.size;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
} 


var mystack = new Stack();

console.log("hello")
mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log("hello")
// console.log(mystack.pop());
// console.log(mystack.peek());
// console.log(mystack.push("Hardik"));
// console.log(mystack.peek());