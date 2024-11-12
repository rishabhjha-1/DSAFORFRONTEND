const arr = [5, 2, 8, 7, 4, 6,4];

// const arrDivisibleBy2=arr.filter((i)=>i%2==0)
// console.log(arrDivisibleBy2)

Array.prototype.myFilter = function (cb) {
  let arr = this;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, this)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// console.log(arr.myFilter((i,index,arr)=>i%2==0))

//map
// arr.map((i,index,arr)=>i*2)

Array.prototype.myMap = function (cb) {
  let arr = this;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = cb(arr[i], i, this);
  }
  return newArray;
};

// console.log(arr.myMap((i,index,arr)=>i*2))

//reduce polyfill

Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const array = this; 
  const length = array.length >>> 0; 
  let accumulator = initialValue?initialValue :0;
  let startIndex = 0;



  // Iterate over the array
  for (let i = startIndex; i < length; i++) {
    if (i in array) {
      // Skip holes in sparse arrays
      accumulator = callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};

console.log(arr.myReduce((acc,curr)=>acc+curr),"df")

function debounce(func, delay) {
  let interval;
  return function (...args) {
    clearTimeout(interval);
    interval = setTimeout(() => func(...args), delay);
  };
}

function throttle(func, delay) {
  let throttle = false;
  return function (...args) {
    if (!throttle) {
      throttle = true;
      func(...args);
      setTimeout(() => {
        throttle = false;
      }, delay);
    }
  };
}

const arr1 = [1, 2, 3, 4, 5];

//PUSH
arr1.push(6);
// console.log(arr1,"push")
//POP
arr1.pop();
// console.log(arr1,"pop")

//SHIFT
arr1.shift();
// console.log(arr1,"shift")

//UNSHIFT
arr1.unshift(44);
// console.log(arr1,"unshift")

//INDEXOF
// console.log(arr1.indexOf(2))

//SORT
arr1.sort();
// console.log(arr1,"ascending")

arr1.sort((a, b) => b - a);
// console.log(arr1,"descending")

class Stack {
  constructor(size) {
    this.stack = [];
    this.size = size;
  }

  push(element) {
    // if(this.isFull) return "Stack is full";
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Return a message if stack is empty
    }
    return this.stack.pop();
  }

  isFull() {
    return this.stack.length !== this.size;
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  sizke() {
    return this.size;
  }
  peak() {
    if (this.isEmpty()) {
      return "Stack is empty"; // Return a message if stack is empty
    }
    return this.stack[this.stack.length - 1];
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








// string methods
// 1. charAt(index)
// Description: Returns the character at a specific index in a string.
let strsdad = "Hello";
console.log(strsdad.charAt(1)); // "e"
console.log(strsdad[1]) // "e"


// 2. charCodeAt(index)
// Description: Returns the Unicode (UTF-16) value of the character at a given index.
let strsdads = "Hello";
console.log(strsdads.charCodeAt(1)); // 101 (Unicode value of "e")



// 3. concat(...strings)
// Description: Joins two or more strings and returns a new string.
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"





// 4. includes(substring)
// Description: Checks if a string contains the specified substring. Returns true or false.
let strsda = "Hello World";
console.log(strsda.includes("Hello")); // true
console.log(strsda.includes("hello")); // false (case-sensitive)



// 5. indexOf(searchValue)
// Description: Returns the index of the first occurrence of a specified value in the string. Returns -1 if not found.
let strsd = "Hello World";
console.log(strsd.indexOf("World")); // 6
console.log(strsd.indexOf("JavaScript")); // -1
console.log(strsd.indexOf("wo")); // -1




// 6. lastIndexOf(searchValue)
// Description: Returns the index of the last occurrence of a specified value in the string. Returns -1 if not found.
let strs = "Hello World, Hello Universe";
console.log(strs.lastIndexOf("Hello")); // 13




// 7. match(regex)
// Description: Retrieves the matches of a string against a regular expression.
let strss = "The quick brown fox";
console.log(strs.match(/\b\w{5}\b/g)); // ["quick", "brown"]


// 8. replace(searchValue, newValue)
// Description: Replaces the first occurrence of a specified value with a new value.
let strsss = "Hello World";
console.log(strsss.replace("World", "JavaScript")); // "Hello JavaScript"



// 9. search(regex)
// Description: Tests the string against a regular expression and returns the index of the first match, or -1 if no match is found.
let strssa = "The quick brown fox";
console.log(strssa.search("quick")); // 4



// 10. slice(startIndex, endIndex)
// Description: Extracts a section of a string and returns it as a new string.
let strsp = "Hello World";
console.log(strsp.slice(0, 5)); // "Hello"
console.log(strsp.slice(-5));   // "World"


// 11. split(separator)
// Description: Splits a string into an array of substrings based on a specified separator.
let strspsa = "Hello World";
console.log(strspsa.split(" ")); // ["Hello", "World"]



// 12. substring(startIndex, endIndex)
// Description: Returns a substring between two indices.
let strspsasa = "Hello World";
console.log(strspsasa.substring(0, 5)); // "Hello"



// 13. toLowerCase()
// Description: Converts all characters in the string to lowercase.
let strspsasasa = "HELLO";
console.log(strspsasasa.toLowerCase()); // "hello"



// 14. toUpperCase()
// Description: Converts all characters in the string to uppercase.
let wda = "hello";
console.log(wda.toUpperCase()); // "HELLO"



// 15. trim()
// Description: Removes whitespace from both ends of a string.
let rqw3dstr = "  Hello World  ";
console.log(rqw3dstr.trim()); // "Hello World"



// 16. trimStart() / trimLeft()
// Description: Removes whitespace from the beginning of a string.
let asf = "  Hello";
console.log(asf.trimStart()); // "Hello"



// 17. trimEnd() / trimRight()
// Description: Removes whitespace from the end of a string.
let strdsfa = "Hello  ";
console.log(strdsfa.trimEnd()); // "Hello"



// 18. toLocaleLowerCase()
// Description: Converts a string to lowercase according to the locale.
let strsas = "Istanbul";
console.log(strsas.toLocaleLowerCase("tr-TR")); // "istanbul" (Turkish locale rules)



// 19. toLocaleUpperCase()
// Description: Converts a string to uppercase according to the locale.
let strsa = "istanbul";
console.log(strsa.toLocaleUpperCase("tr-TR")); // "İSTANBUL"


// 20. padStart(targetLength, padString)
// Description: Pads the string with the specified character (or string) until it reaches the specified length.
let strcm = "5";
console.log(strcm.padStart(3, "0")); // "005"


// 21. padEnd(targetLength, padString)
// Description: Pads the string with the specified character (or string) until it reaches the specified length from the end.
let strc = "5";
console.log(strc.padEnd(3, "0")); // "500"



// 22. repeat(count)
// Description: Returns a new string that repeats the original string a specified number of times.
let strp = "abc";
console.log(strp.repeat(3)); // "abcabcabc"



// 23. startsWith(searchString)
// Description: Checks if the string starts with the specified substring.
let strw = "Hello World";
console.log(strw.startsWith("Hello")); // true



// 24. endsWith(searchString)
// Description: Checks if the string ends with the specified substring.
let stra = "Hello World";
console.log(stra.endsWith("World")); // true



// 25. fromCharCode(...codes)
// Description: Returns a string created by using the specified sequence of Unicode values.
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"



//includes
// string.includes(searchString, position)
let strn = "Hello, world!";

console.log(strn.includes("world"));  // true
console.log(strn.includes("hello"));  // false (case-sensitive)
console.log(strn.includes("world", 7));  // true (starting search from index 7)





//que using array
class Queue {
    constructor() {
        this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }
  
    // Remove and return the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
  
    // Return the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
        return this.items.length;
    }
  
    // Clear the queue
    clear() {
        this.items = [];
    }
  }
  


//stack using two queue

class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    // Push an element onto the stack
    push(element) {
        this.queue1.push(element);
    }

    // Pop the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }

        // Move all elements except the last one from queue1 to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        // The last remaining element in queue1 is the "top" element of the stack
        const poppedElement = this.queue1.shift();

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedElement;
    }

    // Get the top element of the stack without removing it
    top() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }

        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const topElement = this.queue1[0];

        // Move the last element back to queue2 and swap
        this.queue2.push(this.queue1.shift());
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.queue1.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.queue1.length + this.queue2.length;
    }
}



//stack using two queue
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.stack1.push(element);
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        // Move elements from stack1 to stack2 only if stack2 is empty
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    // Return the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        // Move elements from stack1 to stack2 only if stack2 is empty
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.stack1.length + this.stack2.length;
    }
}


//circular queue
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k); // Fixed-size array to hold elements
    this.capacity = k; // Maximum capacity of the queue
    this.front = -1; // Points to the front element in the queue
    this.rear = -1; // Points to the rear element in the queue
    this.count = 0; // Keeps track of the number of elements in the queue
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false; // Cannot enqueue if the queue is full

    if (this.isEmpty()) {
        this.front = 0; // Set front to 0 if this is the first element
    }
    
    this.rear = (this.rear + 1) % this.capacity; // Circularly increment rear
    this.queue[this.rear] = value; // Insert the element
    this.count++; // Increase the count of elements
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false; // Cannot dequeue if the queue is empty

    if (this.front === this.rear) { // Only one element left in the queue
        this.front = -1;
        this.rear = -1; // Reset both pointers to indicate the queue is empty
    } else {
        this.front = (this.front + 1) % this.capacity; // Circularly increment front
    }
    
    this.count--; // Decrease the count of elements
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.front]; // Return -1 if empty, otherwise front element
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.rear]; // Return -1 if empty, otherwise rear element
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0; // Queue is empty if count is 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.capacity; // Queue is full if count equals capacity
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


//Lru cache using ll and map

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Map to store key-value pairs (the cache)
    
    // Double linked list helper to maintain access order (head is most recent, tail is least recent)
    this.head = { next: null, prev: null }; // Sentinel node (dummy node for easier handling)
    this.tail = { next: null, prev: null }; // Sentinel node (dummy node for easier handling)
    
    this.head.next = this.tail; // Initialize head -> tail
    this.tail.prev = this.head; // Initialize tail <- head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1; // If key not found, return -1
    
    const node = this.cache.get(key);
    this.moveToHead(node); // Move the accessed node to the front (most recent)
    
    return node.value; // Return the value of the node
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value; // Update the value
        this.moveToHead(node); // Move to the front (most recent)
    } else {
        if (this.cache.size >= this.capacity) {
            this.removeLRU(); // Remove the least recently used node
        }
        const newNode = { key, value, next: null, prev: null };
        this.cache.set(key, newNode);
        this.addToHead(newNode); // Add the new node to the front
    }
};

// Helper method to add a node to the front (most recent)
LRUCache.prototype.addToHead = function(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
};

// Helper method to move an existing node to the front (most recent)
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
};

// Helper method to remove a node from the linked list
LRUCache.prototype.removeNode = function(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
};

// Helper method to remove the least recently used node (tail.prev)
LRUCache.prototype.removeLRU = function() {
    const lruNode = this.tail.prev;
    this.removeNode(lruNode);
    this.cache.delete(lruNode.key); // Remove the node from the cache map
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



//simple lru using class

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity; // Max capacity of the cache
      this.cache = new Map(); // Using Map to maintain order of insertion and provide O(1) access
    }
  
    // Get the value from cache
    get(key) {
      if (!this.cache.has(key)) {
        return -1; // If key not found, return -1
      }
      const value = this.cache.get(key);
      // Move the accessed key to the end (most recent)
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  
    // Put a new key-value pair into the cache
    put(key, value) {
      if (this.cache.has(key)) {
        // If key already exists, delete and update it to move it to the end (most recent)
        this.cache.delete(key);
      }
      // If cache exceeds the capacity, remove the least recently used item (first item in Map)
      if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value); // Deletes the first item in Map
      }
      // Insert the new key-value pair as the most recent
      this.cache.set(key, value);
    }
  }
  
  // Example Usage
  const cache = new LRUCache(2); // Create a cache with capacity 2
  cache.put(1, 1); // Cache is {1=1}
  cache.put(2, 2); // Cache is {1=1, 2=2}
  console.log(cache.get(1)); // Returns 1, Cache is {2=2, 1=1}
  cache.put(3, 3); // Removes key 2, Cache is {1=1, 3=3}
  console.log(cache.get(2)); // Returns -1 (not found)
  cache.put(4, 4); // Removes key 1, Cache is {3=3, 4=4}
  console.log(cache.get(1)); // Returns -1 (not found)
  console.log(cache.get(3)); // Returns 3
  console.log(cache.get(4)); // Returns 4
  