const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strFront = str.slice(0,3);
strBack =  str.slice(3);
// console.log(strBack)
strNew = strBack + strFront;
console.log(strNew);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Our original institution of ${str} was chopped and screwed into ${strNew}!`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let info = input.question('How many letters do you want to relocate?\n')
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (Number(info) >= 0 && Number(info) <= 10) {
    let strFrontInput = str.slice(0,info);
    strBackInput = str.slice(Number(info));
    strNewInput = strBackInput + strFrontInput;
    console.log(strNewInput);
} else {
    console.log(`You have chosen ${info}, which is a value larger than the length of the word, so we just chopped and screwed 3 letters.`);
    strBack =  str.slice(3);
    strNew = strBack + strFront;
    console.log(strNew);
}