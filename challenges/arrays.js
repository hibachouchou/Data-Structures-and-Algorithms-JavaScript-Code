// JavaScript Arrays - Exercises

//1. Write a JavaScript function to check whether an `input` is an array or not.
function is_Array(input) {
  console.log(Array.isArray(input));
}
// is_Array([]); // true
// is_Array({}); // false
// is_Array("Hello"); // false

//2. Write a JavaScript function to clone an array.
function Clone_Array(arr) {
  console.log([...arr])
}
//Clone_Array([1, 2, 3]);

/* 3. Write a JavaScript function to get the first element of an array. 
Passing the parameter 'n' will return the first 'n' elements of the array.*/
function GetFirstElements(array, n = null) { 
  if (n === null){
    console.log(array[0])
  } else{
    console.log(array.slice(0, n).join(' '))
  }
  }
//GetFirstElements([5,6,7,8]) 
//GetFirstElements([5,6,7,8], 2)

/*4. Write a JavaScript function to get the last element of an array. 
Passing the parameter 'n' will return the last 'n' elements of the array.*/
function GetLastElements(array, n = null) { 
  let last_index = array.length - 1; 
  if (n === null) {
    console.log(array[last_index]);
  } else {
    console.log(array.slice(-n).join(' '));
  }
}
//GetLastElements([5, 6, 7, 8]);  
//GetLastElements([5, 6, 7, 8], 2);

//5. Write a simple JavaScript program to join all elements of the following array into a string.
function  Join_Array(array) {
  console.log(array.join(' '));
}
//Join_Array(['This', 'is', 'a', 'test']);
//Join_Array([1, 2, 3, 4]);



/*6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
For example if you accept 025468 the output should be 0-254-6-8. */
function FormatPhoneNumber(number) {
  let numberStr = number.toString();
  let result = "";

  for (let i = 0; i < numberStr.length; i++) {
    const currentDigit = parseInt(numberStr[i]);
    const nextDigit = parseInt(numberStr[i + 1]);

    result += currentDigit;

    if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
      result += "-";
    }
  }

  console.log(result);
}
//FormatPhoneNumber("025468"); //0-254-6-8

//7. Write a JavaScript program to sort the items of an array.
function  SortItemsInArray(arr){
  arr.sort((a, b) => a - b);
  console.log(arr)
}
//SortItemsInArray([9, 3, 5, 1, 7,  2, 4, 6,  8]);

//8. Write a JavaScript program to find the most frequent item in an array.
function MostFrequentItem(arr) {
  // Object to store counts of each item
  let counts = {};
  // Variable to store the maximum count encountered so far
  let maxCount = 0;
  // Variable to store the most frequent item
  let mostFrequentItem;

  // Loop through each item in the array
  for (const item of arr) {
    // If the item is not yet counted, initialize its count to 0
    if (!counts[item]) {
      counts[item] = 0;
    }
    // Increment the count for the current item
    counts[item]++;

    // Check if the count of the current item is greater than the maximum count encountered so far
    if (counts[item] > maxCount) {
      // If so, update the maximum count and the most frequent item
      maxCount = counts[item];
      mostFrequentItem = item;
    }
  }

  // Output the most frequent item
  console.log(mostFrequentItem);
}
//MostFrequentItem([1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]);



/*9. Write a JavaScript program that accepts a string as input and swaps the case of each character. 
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. */
function SwapCase(str){
  return str.split('').map((char)=>{
     return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }).join('');

}
//console.log(SwapCase("Hello World"));

/*10. Write a JavaScript program that prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------ */
function  printArrayElements(a){
  let row=0;
  for(let i=0 ;i <a.length;i++){
  	console.log(`row ${row}`);
  	for(let j=0;j<a[i].length;j++)
  	{
  		console.log(`  ${a[i][j]}`);
  	}
  	row++;
  	if (i !== a.length-1) {
  		console.log('------')
  	}
  }
}

//printArrayElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])

//11. Write a JavaScript program to find the sum of squares of a numerical vector.
function  sumOfSquares(arr){
  let sum=0;
  for(let i=0;i < arr.length;i++){
    sum += Math.pow(arr[i],2);
  }
  return sum;
}
//console.log(sumOfSquares([5, -1, 2,  4]));

//12. Write a JavaScript program to compute the sum and product of an array of integers.
function   sumAndProduct(arr){
  let sum = 0 ,product = 1;
  for(let i=0;i  < arr.length;i++){
    sum+=arr[i];
    product *= arr[i];
  }
  console.log("Sum: ",sum,"Product: ",product) 
}
//sumAndProduct([1,2,3,4]);

//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // Convert both current item and items in newArr to lowercase for case insensitivity
    let lowercaseItem = arr[i].toLowerCase();
    let lowercaseNewArr = newArr.map(item => item.toLowerCase());
    
    if (!lowercaseNewArr.includes(lowercaseItem)) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

//removeDuplicates(['Abc', 'def', 'abc', 'GHi', 'jkl']);

//16. Write a JavaScript program to find the leap years in a given range of years.
// A year is a leap year if it is divisible by 4
// However, if it's divisible by 100 but not by 400, it's not a leap year
function isLeapYear(year) {
  return year % 4 == 0 && year % 100 != 0  || year % 400 == 0;
}
//
function findLeapYears(startYear, endYear) {
  let leapYears = [];

  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }

  return leapYears;
}
const startYear = 2000;
const endYear = 2024;
const leapYearsInRange = findLeapYears(startYear, endYear);
//console.log("Leap years between", startYear, "and", endYear, ":", leapYearsInRange);


//17. Write a JavaScript program to shuffle an array.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i (inclusive)
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
  }
   console.log(array) ;
}
//shuffleArray([1,2,3,4,5,6,7,8,9]);

//18. Write a JavaScript program to perform a binary search.

function binarySearch1(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the target is present at mid
    if (arr[mid] === target) {
      return mid;
    }

    // If the target is greater, ignore the left half
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // If the target is smaller, ignore the right half
      right = mid - 1;
    }
  }

  // If we reach here, then the element was not found
  return -1;
}


// const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// //const target = 10;
// const target = 13;
// const index = binarySearch1(array, target);

// if (index !== -1) {
//   console.log("Target", target, "found at index:", index);
// } else {
//   console.log("Target", target, "not found in the array.");
// }

//Here's the binary search algorithm implemented using recursion

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Base case: target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Base case: target found at mid index
  } else if (arr[mid] < target) {
    // Recur on the right half of the array
    return binarySearch(arr, target, mid + 1, right);
  } else {
    // Recur on the left half of the array
    return binarySearch(arr, target, left, mid - 1);
  }
}

// const array1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const target1 = 13;
// const index1 = binarySearch(array1, target1);

// if (index1 !== -1) {
//   console.log("Target", target1, "found at index:", index1);
// } else {
//   console.log("Target", target1, "not found in the array.");
// }


/*19. There are two arrays with individual values. 
Write a JavaScript program to compute the sum of each individual index value in the given array. */
function computeSumAtIndex(arr1, arr2) {
  const result = [];
  
  // Check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    console.log("Arrays must have the same length.");
    return result;
  }
  
  // Iterate over the arrays and compute the sum at each index
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  
  return result;
}

//console.log("Sum of each individual index value:", computeSumAtIndex([1, 2, 3, 4], [5, 6, 7, 8]));


/*20. Write a JavaScript program to find duplicate values in a JavaScript array. */
function findDuplicates(arr) {
  const duplicates = [];
  const uniqueValues = {};
  // Iterate over the array
  for (const val of arr) {
    // If the value is already in uniqueValues, add it to duplicates
     if (uniqueValues[val]) {
       duplicates.push(val);
     } else {
       uniqueValues[val] = true;
     }
     }
     
     console.log(duplicates)
}
//findDuplicates([1, 2, 3, 4, 1, 5, 6, 7,  8, "a", "b", "c","d" ,'e','f'])

/*22. Write a JavaScript program to compute the union of two arrays. */
function computeUnion(arr1, arr2){
  let unionSet= new Set();
  for(let item of arr1) {unionSet.add(item)}
  for(let item of arr2) {unionSet.add(item)}
  console.log(Array.from(unionSet))
}
//computeUnion([1,2,3,4], [3,4,5,6])

/*23. Write a JavaScript function to find the difference between two arrays. */
function computeDiff(arr1, arr2){
  let diffArr=[];
  for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i])){
      diffArr.push(arr1[i]);
    }
  }
  for(let i=0;i<arr2.length;i++){
    if(!arr1.includes(arr2[i])){
      diffArr.push(arr2[i]);
    }
  }
  console.log(diffArr)
}
//computeDiff([1,2,3,4,5],[3,4,5,6])

/*24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. */
function removeFalsyValues(arr) {
  return arr.filter(value => {
    return value !== null &&
           value !== 0 &&
           value !== "" &&
           value !== false &&
           !Number.isNaN(value) &&
           typeof value !== 'undefined';
  });
}

//console.log(removeFalsyValues([1, null, undefined, 2, '', false, NaN]));


/* 25. Write a JavaScript function to sort the following array of objects by title value. */
function sortByTitle(arrayOfObjects) {
  // Sorting the array of objects by the 'title' value
  arrayOfObjects.sort((a, b) => {
    // Convert both titles to lowercase for case-insensitive sorting
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    // Compare the titles
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(arrayOfObjects)
}

// sortByTitle([
//   { title: "Zebra" },
//   { title: "Apple" },
//   { title: "Banana" },
//   { title: "carrot" }
// ]);


/*26. Write a JavaScript program to find a pair of elements 
(indices of the two numbers) in a given array whose sum equals a specific target number. */
function  findPairWithSum(arr, targetNum){
 
}

/*27. Write a JavaScript function to retrieve the value of a given property from all elements in an array. */
function  getPropertyValueFromArrayElements(arr, propName){
}

/*28. Write a JavaScript function to find the longest common starting substring in a set of strings. */
function  longestCommonStartingSubstring(stringsArray) {

}


/*29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds. */
function FillArrayWithDifferentValues(){
  
}

/*30. Write a JavaScript function that merges two arrays and removes all duplicate elements. */
function mergeAndRemoveDuplicates(a, b) {
  let mergedArr = [...new Set([...a, ...b])];
  console.log(mergedArr) ;
}
//mergeAndRemoveDuplicates([1,2,3,4], [3,4,5,6]);

/*31. Write a JavaScript function to remove a specific element from an array. */
function removeElementFromArray(arr, elem) {
console.log(arr.filter(item => item !== elem))
}
//removeElementFromArray([1,2,3,4,5,6,7], 3)

/*32. Write a JavaScript function to find an array containing a specific element. */

function findElementInArray(arr, searchElem) {
  return arr.includes(searchElem);
}

// const array = [1, 2, 3, 4, 5];
// const searchElement = 3;
// const found = findElementInArray(array, searchElement);

// if (found) {
//   console.log("The element", searchElement, "is found in the array:", array);
// } else {
//   console.log("The element", searchElement, "is not found in the array:", array);
// }


/*33. Write a JavaScript script to empty an array while keeping the original. */
function emptyArrayKeepOriginal(arr) {
  arr.length = 0;
}
// const originalArray = [1, 2, 3, 4, 5];
// console.log("Original array:", originalArray);

// emptyArrayKeepOriginal(originalArray);
// console.log("Array after emptying while keeping the original:", originalArray);


/*34. Write a JavaScript function to get the nth largest element from an unsorted array. */
function nthLargest(arr, n) {
  // Sort the array in descending order
  arr.sort(function(a, b) {
      return b - a;
  });
  console.log('Sorted Array', arr);
  // Return the nth largest element
  return arr[n - 1];
}
//console.log("The", 3 + "th largest element is:", nthLargest([1, 5, 2, 7, 3, 9], 3)); // Output: 5

/*35. Write a JavaScript function to get random items from an array. */
function  getRandomItemsFromAnArray(arr, count){
  var result = [];
  var tempArr = arr.slice();
  for(var i=0;i<count;i++){
    var index = Math.floor(Math.random() * tempArr.length / count);
    result.push(tempArr[index]);
    tempArr.splice(index, 1);
    }
  console.log(result) ;
}
//getRandomItemsFromAnArray([1,2,3,4,5,6,7,8,9], 3);

/*36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array. */

/*38. Write a JavaScript function to move an array element from one position to another. */
function moveArrayElement(arr, fromIndex, toIndex) {
  // Remove the element from the 'fromIndex' position
  var element = arr.splice(fromIndex, 1)[0];
  
  // Insert the element at the 'toIndex' position
  arr.splice(toIndex, 0, element);
  
  // Return the modified array
  return arr;
}

// var array = [1, 2, 3, 4, 5];
// var fromIndex = 2;
// var toIndex = 4;
// console.log("Original array:", array);
// moveArrayElement(array, fromIndex, toIndex);
// console.log("Array after moving element:", array);


/*40. Write a JavaScript function to generate an array of integer numbers,
 increasing one from the starting position, of a specified length. */
 function generateIncreasingArray(start, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
      result.push(start + i);
  }
  return result;
}

// var startingPosition = 5;
// var arrayLength = 7;
// var generatedArray = generateIncreasingArray(startingPosition, arrayLength);
// console.log("Generated array:", generatedArray);

 /*41. Write a JavaScript function to generate an array between two integers of 1 step length. */
 function generateSteppingArray(start, end) {
  if (end <= start) {
    throw new Error('The "end" parameter must be greater than the "start" parameter');
  }
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  console.log(result) ;
 }
// generateSteppingArray(1, 10);

 /*42. Write a JavaScript function to find unique elements in two arrays. */
 function findUniqueElements(array1, array2) {
  var unionSet = new Set();
  // Add all elements from first array to  set
  for (var i = 0; i < array1.length; i++) {
    unionSet.add(array1[i]);
  }
  //same for arr2
  // Remove common elements from set
  for (var j = 0; j < array2.length; j++) {
    unionSet.delete(array2[j]);
  }
  //same for arr1
  // Create an array from the remaining set members
  var unionArray = Array.from(unionSet);
  return unionArray;
  
}
//45. Write a JavaScript program to find all the unique values in a set of numbers.
//console.log("Unique elements:", findUniqueElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 


 /*43. Write a JavaScript function to create an array of arrays, 
 ungrouping the elements in an array produced by zip. */

 /*44. Write a JavaScript function to create an object from an array, 
 using the specified key and excluding it from each value. */

 

 //46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).


 //47. Write a JavaScript program to remove all false values from an object or array.

 /*48. Write a JavaScript program that takes an array of integers
  and returns false if every number is not prime. Otherwise, return true. */

  //49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

  //50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

  //51. Write a JavaScript program to check if an array is a factor chain or not.

  //52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

//53. Write a JavaScript program to count the number of arrays inside a given array.

//


