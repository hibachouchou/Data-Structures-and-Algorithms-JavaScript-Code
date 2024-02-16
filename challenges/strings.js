//1. Write a JavaScript function to check whether an 'input' is a string or not.
function IsStrning(input){
 console.log(typeof(input)==="string")   
}

//IsStrning("Hiba")
//IsStrning(7)

//2. Write a JavaScript function to check whether a string is blank or not.
function IsBlank(str){
console.log(str.length===0)
}

//IsBlank("Hi")
//IsBlank("")
//IsBlank(10)

//3. Write a JavaScript function to split a string and convert it into an array of words.
function Split_String(str){
console.log(str.trim().split(''))
}

//Split_String('Nour')

//4. Write a JavaScript function to extract a specified number of characters from a string.
function SubString(str){
   // console.log(str.slice(0,2))
  //  console.log(str.substring(0,2))
      console.log(str.substr(0, 2))
}

//SubString("Hiba")

//5. Write a JavaScript function that hides email addresses to prevent unauthorized access.

function HideEmail(email){
let hidden_string=email.slice(2,email.indexOf('@'))
let hideden_email=email.replace(hidden_string,'***')
console.log(hideden_email)
}
//2nd solution
/** */
//HideEmail('hibachouchene357@example.com')

//6. Write a JavaScript function to parameterize a string.
function Parameterized_String(str) {
    console.log(str.toLowerCase().split(' ').join('-'));
}
/** */
//Parameterized_String('Hiba from Tunisia');

//7. Write a JavaScript function to capitalize the first letter of a string.
function CapitalizeFirstLetter(str){
    let newStr=str.toLowerCase()
    let firstLetter=newStr[0].toUpperCase()
    console.log(firstLetter+newStr.slice(1))
}
//CapitalizeFirstLetter('hiba')
//CapitalizeFirstLetter('hiba et nour')

//8. Write a JavaScript function to capitalize the first letter of each word in a string.
function CapitalizeWord(str) {
    str = str.toLowerCase();
    var words = str.split(' ');
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    console.log(words.join(' '));
}

//CapitalizeWord("hiba and bicha");

/*9. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter.
 It converts upper case letters to lower case, and lower case letters to upper case.*/
 function SwapCase(str) {
    str = str.split('').map(letter => {
        return letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
    console.log(str);
}

 //SwapCase('HibaBichaSisterS')

 //10. Write a JavaScript function to convert a string into camel case.
 function CamelCase(str){

 }

 //11. Write a JavaScript function to uncommelize a string.

 //12. Write a JavaScript function to concatenate a given string n times (default is 1).

 //13. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

 /*14. Write a JavaScript function that format a number in a human-readable string with the correct suffix, 
 such as 1st, 2nd, 3rd, etc.*/

 /* 15. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. 
 Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters. */

//16. Write a JavaScript function to chop a string into chunks of a given length.

//17. Write a JavaScript function to count substrings in a string.

//18. Write a JavaScript function that can pad (left, right) a string to get to a specific length.

//19. Write a JavaScript function to repeat a string for a specified time.

//20. Write a JavaScript function to get a part of a string after a specified character.

//21. Write a JavaScript function to strip leading and trailing spaces from a string.

//22. Write a JavaScript function to truncate a string to a certain number of words.

/*23. Write a JavaScript function to alphabetize a given string.
Alphabetize string : An individual string can be alphabetized. 
This rearranges the letters so they are sorted A to Z.*/

//24. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

//25. Write a JavaScript function to convert ASCII to Hexadecimal format.

//26. Write a JavaScript function to convert Hexadecimal to ASCII format.

//27. Write a JavaScript function to find a word within a string.

//28. Write a JavaScript function that checks whether a string ends with a specified suffix.

//29. Write a JavaScript function to remove non-printable ASCII characters.

//30. Write a JavaScript function to remove non-word characters.

//31. Write a JavaScript function to convert a string to title case.

//32. Write a JavaScript function to create a zero-filled value with an optional +, - sign.

//33. Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.

//34. Write a JavaScript function to create a case-insensitive search.


//35. Write a JavaScript function to uncapitalize the first character of a string.


//36. Write a JavaScript function to uncapitalize the first letter of each word of a string.

//37. Write a JavaScript function to capitalize each word in the string.

//38. Write a JavaScript function to uncapitalize each word in the string.


//39. Write a JavaScript function to test whether the character at the index provided is upper case.

//40. Write a JavaScript function to test whether the character at the given (character) index is lower case.

//41. Write a JavaScript function to test whether a string starts with a specified string.

//42. Write a JavaScript function to test whether a string ends with a specified string.

/*48. Write a JavaScript function to get the successor to a string.

Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric
 (or the rightmost character if there are no alphanumerics) in the string. 
 Incrementing a digit always results in another digit, 
 and incrementing a letter results in another letter of the same case. 
 If the increment generates a carry, 
 the character to the left of it is incremented. This process repeats until there is no carry,
  adding an additional character if necessary.
 */

  /* 50. Write a JavaScript program to check if a given string contains alphanumeric characters that are palindromes
   regardless of special characters and letter case.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards*/

