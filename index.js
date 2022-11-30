
/**
 * Convert celsius to farenheit
 * -in order to convert celsius to farenheit, you need to multiply the temperature in celsius times 9/5 
 *  plus 32
 */
function convertCtoF(celsius) {
    let farenheit = celsius * 9/5 + 32;
    return farenheit;
}
console.log(convertCtoF(30));

/** 
 * Reverse a String. 
 * -You will need to convert the string into an array using the split method(). 
 * -Reverse the contents of the newly formed array and join them using the join() method. 
 * NOTE-: The default separator of join is a comma. for this challenge, you will need to pass an empty string
 * 
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); //return 'olleh'

/**
 * -Factorialize a number. return the factorial of the provided interger. 
 * -we will use recursion to solve this challenge. follow this link to learn more about recursion https://www.freecodecamp.org/news/quick-intro-to-recursion/
 * -In mathematics, the factorial of a non-negative integer n, denoted by n!, 
 *  is the product of all positive integers less than or equal to n. 
 */

function factorial(num) {
    //base case
    if(num < 0) return -1;
    if(num === 0) return 1;
    else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5)); //will return 120

/**
 * Find the longest word in a string. You answer should be a number
 * -convert the string into an array using the split() method.
 * -arrange the values in the array in descending order using the sort() method. 
 * 
 * 
 */
function findLongestWordLength(str) {
    return str
        .split(' ')
        .sort((a, b) => b.length - a.length)[0].length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //should return 6
