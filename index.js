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

