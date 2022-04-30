/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWords=0 ) {
  if(i === words.length) return longestWords;
  longestWords = Math.max(words[i].length, longestWords);
  return longest(words, i+1, longestWords);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr="") {
  if(i >=str.length) return newStr;
  newStr += str[i];
  return everyOther(str, i+2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let left = str[i];
  let right = str[str.length-1 - i];
  if (i > Math.floor(str.length/2)) return true;
  if (left != right) return false;
  return isPalindrome(str, i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if( arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, newString="") {
  if(newString.length === str.length) return newString;
  newString += str[str.length - 1 - i];
  return revString(str, i+1, newString);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for (let k in obj) {
    if(typeof obj[k] === "string") stringArray.push(obj[k]);
    if(typeof obj[k] === "object") stringArray.push(...gatherStrings(obj[k]));
  };
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length) {
  if (low > high) return -1;
  let mid = Math.floor((high + low)/2);
  if(arr[mid] === val) {
    return mid;
  }
  if(arr[mid] > val) {
    return binarySearch(arr, val, low, mid-1);
  }
  return binarySearch(arr, val, mid+1, high)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
