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


/*19. There are two arrays with individual values. 
Write a JavaScript program to compute the sum of each individual index value in the given array. */

/*20. Write a JavaScript program to find duplicate values in a JavaScript array. */

/*22. Write a JavaScript program to compute the union of two arrays. */

/*23. Write a JavaScript function to find the difference between two arrays. */

/*24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. */

/* 25. Write a JavaScript function to sort the following array of objects by title value. */

/*26. Write a JavaScript program to find a pair of elements 
(indices of the two numbers) in a given array whose sum equals a specific target number. */

/*27. Write a JavaScript function to retrieve the value of a given property from all elements in an array. */

/*28. Write a JavaScript function to find the longest common starting substring in a set of strings. */


/*29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds. */

/*30. Write a JavaScript function that merges two arrays and removes all duplicate elements. */

/*31. Write a JavaScript function to remove a specific element from an array. */

/*32. Write a JavaScript function to find an array containing a specific element. */

/*33. Write a JavaScript script to empty an array while keeping the original. */

/*34. Write a JavaScript function to get the nth largest element from an unsorted array. */

/*35. Write a JavaScript function to get random items from an array. */

/*36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array. */

/*37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array. */

/*38. Write a JavaScript function to move an array element from one position to another. */

/*39. Write a JavaScript function to filter false, null, 0 and blank values from an array. */

/*40. Write a JavaScript function to generate an array of integer numbers,
 increasing one from the starting position, of a specified length. */

 /*41. Write a JavaScript function to generate an array between two integers of 1 step length. */

 /*42. Write a JavaScript function to find unique elements in two arrays. */

 /*43. Write a JavaScript function to create an array of arrays, 
 ungrouping the elements in an array produced by zip. */

 /*44. Write a JavaScript function to create an object from an array, 
 using the specified key and excluding it from each value. */

 //45. Write a JavaScript program to find all the unique values in a set of numbers.

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


