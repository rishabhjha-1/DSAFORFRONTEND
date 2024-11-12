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







