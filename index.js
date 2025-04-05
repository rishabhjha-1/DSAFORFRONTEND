//max product subArray
//infoedge
var maxProduct = function (nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [maxProduct, minProduct] = [minProduct, maxProduct];
    maxProduct = Math.max(nums[i], nums[i] * maxProduct);
    minProduct = Math.min(nums[i], nums[i] * minProduct);
    result = Math.max(maxProduct, result);
  }
  return result;
};
// console.log(maxProduct([1,2,5,-9,5,6,6]))

//max sum subarray (Kaden's Algo)

var maxSubArray = function (nums) {
  let currSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

var maxSubArray2 = function (nums) {
  let currSum = nums[0]; //if make it 0 then start i from 0 in for loop
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum += nums[i]
    if(currSum>maxSum)   maxSum=currSum
    if(currSum<0){
      currSum=0
    }
  }
  return maxSum;
};


// console.log(maxSubArray([1,2,5,-9,5,-6,6,-9]))
// console.log(maxSubArray2([1,2,5,-9,5,-6,6,-9]),"check")


var fib = function (n) {
  // if(n<=1) return n;
  // return fib(n-1)+fib(n-2)
  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};
// console.log(fib(4))

//Two sum
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
};

//palindrome
var isPalindrome = function (s) {
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversStr = newStr.split("").reverse().join("");
  if (newStr == reversStr) return true;
  return false;
};
// console.log(isPalindrome("NANad"))
//anagram
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) return false;
    count[t[i]] -= 1;
  }
  return true;
};
// console.log(isAnagram("NANad",'daNAN'))

//detect cycle in LL
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
};

//best time to buy and sell stock
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};
// console.log(maxProfit([7,1,5,3,6,4]))

//sort 0 and 1
function segregate0and1(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] === 0 && start < end) {
      start++;
    }
    if (arr[end] === 1 && start < end) {
      end--;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
  }
  return arr;
}
// console.log(segregate0and1([0,1,0,0,1,0]))

//sort 0 1 and 2

function sort012(arr) {
  // your code here
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;
  while (mid <= end) {
    if (arr[mid] == 1) {
      mid += 1;
    } else if (arr[mid] == 0) {
      [arr[mid], arr[start]] = [arr[start], arr[mid]];
      start += 1;
      mid += 1;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[end]] = [arr[end], arr[mid]];
      end -= 1;
    }
  }
  return arr;
}

// console.log(sort012([0,1,0,2,1,0,1,2,0]))

//second largest element in an array

function getSecondLargest(arr) {
  // Code Here
  // let largest =-1
  // let secondLargest=-1
  // for(let i=0;i<arr.length;i++){
  //     if(arr[i]>largest){
  //       secondLargest=largest
  //       largest=arr[i]

  //     }
  //     if(arr[i]<largest && arr[i]>secondLargest){
  //         secondLargest=arr[i]
  //     }
  // }
  // return secondLargest

  let set = new Set(arr.sort((a, b) => b - a));
  return Array.from(set)[1] ?? -1;
}

// console.log(getSecondLargest([7,1,5,3,6,4]))

//reverse array

function reverseArray(arr) {
  // your code here
  // arr.reverse()
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}
// console.log(reverseArray([7,1,5,3,6,4]))

//reverse array till k

function reverseArrayTillK(arr, i, k) {
  // your code here
  // arr.reverse()
  let start = i;
  let end = k;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}
// console.log(reverseArrayTillK([7,1,5,3,6,4],3,5))

//Rotate by k
var rotate = function (nums, k) {
  if (k > nums.length) {
    k %= nums.length;
  }
  //full reversed array
  let reversedArray = nums.reverse();
  let firstHalfReverse = reverseArrayTillK(reversedArray, 0, k - 1);

  let finalAnswer = reverseArrayTillK(firstHalfReverse, k, nums.length - 1);
  return finalAnswer;
};
//  function reverseArrayTillK(arr,i,k) {
//    // your code here
//    // arr.reverse()
//    let start=i;
//    let end=k
//    while(start<end){
//        [arr[start],arr[end]]=[arr[end],arr[start]]
//        start++
//        end--
//    }

//    return arr
//  }

//  console.log(rotate([7,1,5,3,6,4],2))

//removeDuplicates in sorted array
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  let startIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[startIndex] = nums[i];
      startIndex++;
    }
  }
  return startIndex;
};

//  console.log(removeDuplicates([1,1,2,2,3,4,4,5]))

//factorial

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5))

//two sum in sorted array without usnig map
//arr=[0,1,2 ,5,6,7,9] target =9
// times internet

function getIndeces(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ans = [];
  while (start <= end) {
    if (arr[start] + arr[end] == target) {
      ans.push([start, end]); // Store both indices as a pair
      start++;
      end--;
    } else if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    }
  }
  return ans;
}
// console.log(getIndeces([0,1,2 ,5,6,7,8,9],9))

// you are given an array a of n integers where n is the range [3,1000] you need to find the number of "special" triplet
// a triplet  (i j k) called special if the following conditons are met
// 1. 0<=i<j<k
// 2. A[i]<A[j]<A[k]
// 3. A[i] and A[k] is prime number but A[j] is not a prime number

// you van assume that all the numbers in the array are in range of [2,10^6] adn the arrray has no repeaed numbers
//syndr - OA

// Sieve of Eratosthenes to precompute prime numbers up to 10^6
//could be wrong solution
function sieve(limit) {
  const isPrime = Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}

// Function to count special triplets
function countSpecialTriplets(arr) {
  const n = arr.length;
  const limit = 1000000; // 10^6
  const isPrime = sieve(limit); // Get prime status for numbers up to 10^6
  let count = 0;

  // Iterate through all possible triplets (i, j, k)
  for (let i = 0; i < n - 2; i++) {
    if (!isPrime[arr[i]]) continue; // Skip if A[i] is not prime

    for (let j = i + 1; j < n - 1; j++) {
      if (isPrime[arr[j]]) continue; // Skip if A[j] is prime

      for (let k = j + 1; k < n; k++) {
        if (isPrime[arr[k]] && arr[i] < arr[j] && arr[j] < arr[k]) {
          count++;
        }
      }
    }
  }

  return count;
}

// Example usage
const arr = [3, 4, 5, 7, 9, 11];
// console.log(countSpecialTriplets(arr)); // Output the count of special triplets

//nth prime number

function sieveOfErasthathone(n) {
  const limit = 1000000;
  let primes = [];
  const isPrime = Array(1000000).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < limit; j+=i) {
        isPrime[j] = false;
      }
    }
  }
  for(let i=2;i<limit;i++){
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  return primes[n-1];
}
// console.log(sieveOfErasthathone(9));


//merge two string
//str1= "abcde" str2="ghi"
//outputStr="agbhcide"

function mergeStr(str1,str2){
  let i=0
  let j=0
  // const outputStr=[] //can use this too
  let outputStr=""
  while(i<str1.length || j<str2.length){
    // outputStr.push(str1[i],str2[j])
    outputStr += str1[i] || '';  // Append from str1 if available
    outputStr += str2[j] || ''; 
    i++;
    j++;
  }
  if(i<str1.length){

    for(let k=i;k<str1.length;k++){
// outputStr.push(str1[k])
      outputStr+=str1[k]
    }
  }
  if(j<str2.length){
    for(let k=j;k<str2.length;k++){
// outputStr.push(str1[k])
      
      outputStr+=str1[k]
    }
  }
  // return outputStr.join(",")
  return outputStr

}
// console.log(mergeStr("abcde","ghi"));




//rain water trapping approach 1 tle
var trap = function(height) {

  let count=0
  for(let i=0;i<height.length;i++){
      // console.log(i,prefixArray(height,i),suffixArray(height,i))
      let prefix = prefixArray(height, i);
      let suffix = suffixArray(height, i);
      if(height[i] < prefix && height[i] < suffix){
      count+=Math.min(prefix,suffix)-height[i]

      }

  }
  return count

  
};

function prefixArray(height,n){
  let output=[]
  output[0]=height[0]
  for(let i=1;i<height.length;i++){
      output[i]=Math.max(height[i],output[i-1])
  }

  return output[n]
}
function suffixArray(height,n){
  let output=Array(height.length).fill(0)
  output[height.length-1]=height[height.length-1]
  for(let i=height.length-2;i>=0;i--){
      output[i]=Math.max(height[i],output[i+1])
  }
  return output.reverse()[height.length-n-1]
}

//rain water trapping approach 2 tle
var trap = function(height) {
  let count = 0;

  // Loop over each element of the height array
  for (let i = 0; i < height.length; i++) {
      // Get the maximum height to the left and right of the current index
      let prefix = prefixArray(height, i);
      let suffix = suffixArray(height, i);

      // Calculate water trapped at the current index
      if (height[i] < prefix && height[i] < suffix) {
          count += Math.min(prefix, suffix) - height[i];
      }
  }

  return count;
};

// Function to calculate the maximum height to the left of current index
function prefixArray(height, n) {
  let output = height[0];
  for (let i = 1; i <= n; i++) {
      output = Math.max(output, height[i]);
  }
  return output;
}

// Function to calculate the maximum height to the right of current index
function suffixArray(height, n) {
  let output = height[height.length - 1];
  for (let i = height.length - 2; i >= n; i--) {
      output = Math.max(output, height[i]);
  }
  return output;
}

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));  // Output: 6


//optimised rain water trapping

var trapOptimised = function(height) {
  let lmax=0
  let rmax=0
  let total=0;
  let l=0
  let r=height.length-1
  while(l<r){
      if(height[l]<=height[r]){
          if(lmax>height[l]){
              total+=lmax-height[l]
          }else{
              lmax=height[l]
          }
          l+=1
      }else{
          if(rmax>height[r]){
              total+=rmax-height[r]
          }else{
              rmax=height[r]
          }
          r-=1
      }
  }
  return total
  
};



//reverse string using recursion

function reverseStr(str){
  if(str.length==1) return str[0]
  return reverseStr(str.substring(1))+str[0]

  //withour recursion
//  return str.split('').reverse().join('')

}
// console.log(reverseStr('abcdds'))

function findAllSubsetRecursive(nums,i,temp,result){

  if(i==nums.length){
    return result.push([...temp])
  }

  temp.push(nums[i])
  findAllSubsetRecursive(nums,i+1,temp,result)
  temp.pop()
  findAllSubsetRecursive(nums,i+1,temp,result)
  return result

}

function findAllSubset(nums){
  let temp=[]
  let result=[]
  return findAllSubsetRecursive(nums,0,temp,result)
}

console.log(findAllSubset([1,2,3]))

//valid parenthisis
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack=[]
  const bracketMap = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  for (let i=0;i<s.length;i++){
      if(s[i]=='(' ||s[i]=='['|| s[i]=='{'){
          stack.push(s[i]);
      }else{
          let lastBracket=stack.pop();
      
          if(bracketMap[lastBracket]!==s[i]){
              return false
          }
      }
      
  }
  console.log(stack)
  return stack.length==0
};


//binary search

var search = function(nums, target) {
  let start=0
  let end=nums.length-1;
  while(start<=end){
   let mid=parseInt((start+end)/2)
   if(nums[mid]===target){
       return mid
   }else if(nums[mid]>target){
       end=mid-1
   }else{
       start=mid+1
   }
  }
  return -1
   
};


// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
var maximumCount = function(nums) {
  let first =0;
  let end=nums.length-1
  let firstPositive=nums.length
  while(first<=end){
      const mid = Math.floor((first + end) / 2);
      if(nums[mid]>0){
          firstPositive=mid
          end=mid-1

      }else{
          first=mid+1
      }

  }
   first =0;
   end=nums.length-1
  let lastNegative=-1
   while(first<=end){
      const mid = Math.floor((first + end) / 2);
      if(nums[mid]<0){
          lastNegative=mid
          first=mid+1


      }else{
          end=mid-1

      }

  }
  return Math.max(nums.length-firstPositive,lastNegative+1)

  
};

//maximum sliding window

function maxSlidingWindowQueue(arr, k) {
  let result = [];
  let dequeue = []; // Holds indices of the elements, maintaining a decreasing order based on values in arr.

  for (let i = 0; i < arr.length; i++) {
    // Remove elements not in the current window
    if (dequeue.length > 0 && dequeue[0] < i - k + 1) {
      dequeue.shift();
    }

    // Remove elements from the back of deque while the current element is larger
    // This ensures that elements in deque are always in decreasing order
    while (dequeue.length > 0 && arr[dequeue[dequeue.length - 1]] < arr[i]) {
      dequeue.pop();
    }

    // Add current element index to deque
    dequeue.push(i);

    // When we've hit the size of the window (i >= k - 1), we can start adding results
    if (i >= k - 1) {
      result.push(arr[dequeue[0]]); // The front of the deque is the max of the current window
    }
  }

  return result;
}


//bubble sort

function bubbleSort(arr){
  let n=arr.length
  for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
      if(arr[j]>arr[i]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
// console.log(bubbleSort([5, 2, 8, 7, 4, 6,4]),"bubble")
//best tc o(n)
//average tc o(n^2)
//worst tc o(n^2)

//space o(1)


//selection sort
function selectionSort(arr){
  let n=arr.length
  for (let i=0; i<n-1 ;i++){
    let minIndex=i
    for(let j=i+1;j<n;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j
      }
    }
    if(minIndex!=i) [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
  }
  return arr
}
// console.log(selectionSort([5, 2, 8, 7, 4, 6,4]),"selectionSort")
// tc o(n)
//space o(1)

//insertion sort
function insertionSort(arr){
  let n=arr.length
  for (let i=1; i<n ;i++){
    let key=arr[i]
    let j=i-1
    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=key
 
  }
  return arr
}
// console.log(insertionSort([5, 2, 8, 7, 4, 6,4]),"insertionSort")
// console.log(bubbleSort([5, 2, 8, 7, 4, 6,4]),"bubble")
//best tc o(n)
//average tc o(n^2)
//worst tc o(n^2)

//space o(1)


//merge sort

function mergeSort(arr){
  if(arr.length<=1) return arr
  let mid=Math.floor(arr.length/2)
  let leftSort=mergeSort(arr.slice(0,mid))
  let rightSort=mergeSort(arr.slice(mid))
  return mergeArray(leftSort,rightSort)
}
//we can use like we merge string
function mergeArray(leftSort,rightSort){
  let sortedArray=[]
  while(leftSort.length && rightSort.length){
     if(leftSort[0]<rightSort[0]){
      sortedArray.push(leftSort.shift())
     }else{
      sortedArray.push(rightSort.shift())
      
     }
  }
  return [...sortedArray,...leftSort,...rightSort]
  
}
console.log(mergeSort([5, 2, 8, 7, 4, 6,4]),"mergeSort")



//search in an rotated array
function searchRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found
    }

    // Determine which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Target is in the left half
      } else {
        left = mid + 1; // Target is in the right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  }

  return -1; // Target not found
}


//infoedge
function splitArrayIntoChunks(array, count) {
  const result = [];
  
  for (let i = 0; i < array.length; i += count) {
    result.push(array.slice(i, i + count));
  }
  
  return result;
}

// Test cases
// console.log(splitArrayIntoChunks([1, 2, 3, 4, 5, 6], 2)); // Output: [[1, 2], [3, 4], [5, 6]]
// console.log(splitArrayIntoChunks([1, 2, 3, 4, 5, 6], 3)); // Output: [[1, 2, 3], [4, 5, 6]]



//infoedge
function flattenArray(arr) {
  let result = [];
  
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element)); // Recursively flatten
    } else {
      result.push(element); // Add non-array elements directly
    }
  });

  return result;
}

// Test cases
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, 3], [4, [5, [6]]]])); // Output: [1, 2, 3, 4, 5, 6]

//using closure and recursion
function flattenArray(arr) {
  const result = []; // Outer variable, part of the closure
  
  function recursiveFlatten(subArray) {
    subArray.forEach(element => {
      if (Array.isArray(element)) {
        recursiveFlatten(element); // Recursively flatten
      } else {
        result.push(element); // Add non-array elements directly
      }
    });
  }
  
  recursiveFlatten(arr); // Start the recursive flattening
  return result;
}

// Example usage
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 




//infoedge

function expandPath(path) {
  const segments = path.split('/');
  const result = [];
  
  for (let i = 0; i < segments.length; i++) {
      if (segments[i] === '..') {
          let dotCount = 1;
          // Count consecutive '..'
          while (i + 1 < segments.length && segments[i + 1] === '..') {
              dotCount++;
              i++;
          }
          
          // Add elements from result based on dotCount
          if (result.length >= dotCount) {
              for (let j = dotCount - 1; j >= 0; j--) {
                  result.push(result[result.length - dotCount]);
              }
          }
      } else {
          result.push(segments[i]);
      }
  }
  
  return result.join('/');
}

// Test cases
console.log(expandPath("x/y/../..")); // Should output: x/y/y/x
console.log(expandPath("p/q/r/../../")); // Should output: p/q/r/r/q/p
console.log(expandPath("m/n/o/../../../")); // Should output: m/n/o/o/n/m/m
console.log(expandPath("a/b/c/../../d/e/../..")); // Should output: a/b/c/c/b/d/e/e/d


//find first repeating
function firstRepeating(arr){
  let map={}
  for (let i=0;i<arr.length;i++){
    if(map[arr[i]]>=1){
      return arr[i]

    }else{
      map[arr[i]]=(map[arr[i]] || 0)+1
    }
  }
  return -1
}
// console.log(firstRepeating([4,2, 1,5 ,2, 0, 2]))





//find first non repeating
function firstNonRepeatingElement(arr) {
  const frequencyMap = {};

  // Step 1: Count the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  }

  // Step 2: Find the first element with a frequency of 1
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap[arr[i]] === 1) {
      return arr[i];
    }
  }

  // Return -1 if no non-repeating element is found
  return -1;
}

// // Example usage
// const input = [4, 5, 1, 2, 0, 4];
// const result = firstNonRepeatingElement(input);
// console.log(result);  // Output: 5



// Find Duplicates in an Array:

// Given an array of integers, find all duplicates.
// Example:
// Input: [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [2, 3]

//with set
function findDuplicates1(arr) {
  const seen = new Set();  // To keep track of elements we’ve already seen
  const duplicates = [];   // To store the duplicates
  
  // Iterate through the array
  for (let num of arr) {
    if (seen.has(num)) {
      // If the number is already in the set, it's a duplicate
      duplicates.push(num);
    } else {
      // Otherwise, add the number to the set
      seen.add(num);
    }
  }

  return duplicates;
}


//without set
function findDuplicates2(arr) {
  const duplicates = [];
  
  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
    const currentNum = Math.abs(arr[i]); // Use the absolute value to handle negative indices

    // If the number at the index corresponding to currentNum is negative, it's a duplicate
    if (arr[currentNum] < 0) {
      duplicates.push(currentNum);
    } else {
      // Otherwise, negate the value at the index of the currentNum
      arr[currentNum] = -arr[currentNum];
    }
  }
  
  return duplicates;
}

// // Example usage
// const input = [4, 3, 2, 7, 8, 2, 3, 1];
// const result = findDuplicates1(input);
// console.log(result);  // Output: [2, 3]



// Longest Common Prefix:

// Given an array of strings, find the longest common prefix.
// Example:
// js
// Copy code
// Input: ["flower", "flow", "flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Sort the strings to compare the first and last strings
  strs.sort();

  // Get the first and last string after sorting
  let first = strs[0];
  let last = strs[strs.length - 1];

  let i = 0;
  // Compare characters of first and last string until they mismatch
  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }

  // The longest common prefix is the substring from the start to the mismatch
  return first.substring(0, i);
}

// Test the function
let input = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(input)); // Output: "fl"





// Generate a DOM Tree from JSON:

// Given a JSON structure, create a DOM tree dynamically.
// Example:
// js
// Copy code
// Input: { tag: "div", children: [{ tag: "p", text: "Hello" }] }
// Output: <div><p>Hello</p></div>

function createDOMTree(json) {
  // Create the element based on the tag
  const element = document.createElement(json.tag);

  // If the element has text, add it as the text content
  if (json.text) {
    element.textContent = json.text;
  }

  // If the element has children, recursively create and append them
  if (json.children && Array.isArray(json.children)) {
    json.children.forEach(child => {
      const childElement = createDOMTree(child);
      element.appendChild(childElement);
    });
  }

  return element;
}

// Example usage
const json = {
  tag: "div",
  children: [
    {
      tag: "p",
      text: "Hello"
    }
  ]
};

// Create the DOM tree and append it to the body or any other container
// const domTree = createDOMTree(json);
// document.body.appendChild(domTree);



//lazy load image funtion
// Function to lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll('img.lazy');

  // Use IntersectionObserver to watch for images entering the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Replace the src with the data-src to load the image
        img.src = img.dataset.src;
        // Remove the lazy class once the image is loaded
        img.classList.remove('lazy');
        // Stop observing the image
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '100px', // Trigger image load a little before it enters the viewport
  });

  // Observe each lazy image
  images.forEach(image => {
    observer.observe(image);
  });
}

// Call the lazy load function when the DOM is ready
// document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Optional: In case of dynamically added images, you can call lazyLoadImages again

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as


// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned

//✅ JavaScript Solution
function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move valid element to front
      k++;
    }
  }

  return k;
}



/*If current element is not val, copy it to position k, then increment k.

After the loop ends, the first k elements of nums will be all elements that are not equal to val.

✅ Example 1
js
Copy code
let nums = [3,2,2,3];
let val = 3;
let k = removeElement(nums, val);
console.log(k); // 2
console.log(nums.slice(0, k)); // [2, 2]
✅ Example 2
js
Copy code
let nums = [0,1,2,2,3,0,4,2];
let val = 2;
let k = removeElement(nums, val);
console.log(k); // 5
console.log(nums.slice(0, k)); // [0, 1, 3, 0, 4] or any variation
⚠️ Remember: Order does not matter, so [0,1,4,0,3] is just as valid as [0,1,3,0,4].

*/













