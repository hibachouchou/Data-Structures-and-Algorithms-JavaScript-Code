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

 SwapCase('HibaBichaSisterS')

 //11. Write a JavaScript function to convert a string into camel case.
 function CamelCase(str){


 }