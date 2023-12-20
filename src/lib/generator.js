

/**
 * randomString()
 * returns a randomly generated string based on the params set by the passed params object
 * @param {Object} params = Object consisting of rules on how to generate the string.
 * @param {Number} length  how long the randomly generated string will be.
 * @returns {string} random string.
 */

export const randomString = (params) => {
    const upperAlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphaString = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const symbols = "!@#$%^&*()_+<>?{}|~";

    let includeNumbers = false;
    let includeUpper = false;
    let includeLower = false;
    let includeSymbols = false;
  

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            if (key === 'Upper' && value === true) {
                includeUpper = true;
            } else if (key === 'Lower' && value === true) {
                includeLower = true;
            } else if (key === 'Numbers' && value === true) {
                includeNumbers = true;
            } else if (key === 'Symbols' && value === true) {
                includeSymbols = true;
            }
        }
    }
    let possibleCharacters = "";
    let randomResult = "";

    // If true, add string to possible characters string
    if (includeUpper) possibleCharacters += upperAlphaString;
    if (includeLower) possibleCharacters += lowerAlphaString;
    if (includeNumbers) possibleCharacters += nums;
    if (includeSymbols) possibleCharacters += symbols;

    for (let step = 0; step < params.Length; step++) {
        const randIndex = Math.floor(Math.random() * possibleCharacters.length);
        randomResult += possibleCharacters.charAt(randIndex);
    }
    console.log(randomResult);
    return randomResult;
};

