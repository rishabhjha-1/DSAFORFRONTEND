//max product subArray
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
// console.log(maxSubArray([1,2,5,-9,5,6,6]))

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
  let start=0;
  let mid=0;
  let end=arr.length-1
  while(mid<=end){
      if(arr[mid]==1){
          mid+=1
        
      }
      else if(arr[mid]==0){
          [arr[mid],arr[start]]=[arr[start],arr[mid]]
            start+=1
            mid+=1
      }
      else if(arr[mid]==2){
          [arr[mid],arr[end]]=[arr[end],arr[mid]]
          end-=1
          
      }
  }
  return arr
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
  
  let set=new Set(arr.sort((a,b)=>b-a))
  return Array.from(set)[1] ?? -1
  
}

// console.log(getSecondLargest([7,1,5,3,6,4]))


//reverse array

function reverseArray(arr) {
  // your code here
  // arr.reverse()
  let start=0;
  let end=arr.length-1
  while(start<end){
      [arr[start],arr[end]]=[arr[end],arr[start]]
      start++
      end--
  }
  
  return arr
}
// console.log(reverseArray([7,1,5,3,6,4]))


//reverse array till k

function reverseArrayTillK(arr,i,k) {
  // your code here
  // arr.reverse()
  let start=i;
  let end=k
  while(start<end){
      [arr[start],arr[end]]=[arr[end],arr[start]]
      start++
      end--
  }
  
  return arr
}
// console.log(reverseArrayTillK([7,1,5,3,6,4],3,5))


//Rotate by k
var rotate = function(nums, k) {
  if(k> nums.length) {
     k%=nums.length
  }
   //full reversed array
   let reversedArray=nums.reverse()
   let firstHalfReverse=reverseArrayTillK(reversedArray,0,k-1)
   
   let finalAnswer=reverseArrayTillK(firstHalfReverse,k,nums.length-1)
   return finalAnswer
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
var removeDuplicates = function(nums) {
  if(nums.length==0) return 0
  let startIndex=1
  for(let i=1;i<nums.length;i++){
      if(nums[i]!=nums[i-1]){
          nums[startIndex]=nums[i]
          startIndex++
      }
  }
  return startIndex

};

//  console.log(removeDuplicates([1,1,2,2,3,4,4,5]))
 

 //factorial

 function factorial(n){
  if(n==0) return 1
  return n*factorial(n-1)
}

// console.log(factorial(5))