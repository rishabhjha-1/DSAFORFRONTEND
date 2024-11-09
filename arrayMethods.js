const arr=[5,2,8,7,4,6];

// const arrDivisibleBy2=arr.filter((i)=>i%2==0)
// console.log(arrDivisibleBy2)

Array.prototype.myFilter=function(cb){
    let arr=this
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i,this)){
            newArray.push(arr[i])
        }
    }
    return newArray
}


// console.log(arr.myFilter((i,index,arr)=>i%2==0))


//map
// arr.map((i,index,arr)=>i*2)

Array.prototype.myMap=function(cb){
    let arr=this
    let newArray=[];
    for(let i=0;i<arr.length;i++){
      newArray[i]=cb(arr[i],i,this);
    }
    return newArray
}

// console.log(arr.myMap((i,index,arr)=>i*2))


function debounce(func,delay){
    let interval;
    return function(...args){
        clearTimeout(interval)
        interval=setTimeout(()=>func(...args),delay)
    }
}


function throttle(func,delay){
    let throttle=false
    return function(...args){
        if(!throttle){
            throttle=true
            func(...args)
            setTimeout(()=>{
                throttle=false
            },delay)
        }
    }

}


const arr1=[1,2,3,4,5]

//PUSH
arr1.push(6)
// console.log(arr1,"push")
//POP
arr1.pop()
// console.log(arr1,"pop")


//SHIFT
arr1.shift()
// console.log(arr1,"shift")

//UNSHIFT
arr1.unshift(44)
// console.log(arr1,"unshift")


//INDEXOF
// console.log(arr1.indexOf(2))

//SORT
arr1.sort()
// console.log(arr1,"ascending")

arr1.sort((a,b)=>b-a)
// console.log(arr1,"descending")




class Stack{
    constructor(size){
        this.stack=[]
        this.size=size
    }

    push(element){
        // if(this.isFull) return "Stack is full";
         this.stack.push(element)
    }

    pop(){
        if (this.isEmpty()) {
            return "Stack is empty"; // Return a message if stack is empty
          }
        return this.stack.pop()
    }

    isFull(){
        return this.stack.length!==this.size
    }
    isEmpty(){
        return this.stack.length==0
    }
    sizke() {
        return this.size
      }
    peak(){
        if (this.isEmpty()) {
            return "Stack is empty"; // Return a message if stack is empty
          }
          return this.stack[this.stack.length-1]
    }
    printStack() {
        console.log(this.stack.join(" "));
      }

}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(30);

stack.push(80);

stack.push(30);
stack.push(130);


stack.printStack(); // Output: 10 20 30
console.log(stack.pop()); // Output: 30
console.log(stack.peak()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.sizke()); // Output: 2
console.log(stack.isEmpty()); 