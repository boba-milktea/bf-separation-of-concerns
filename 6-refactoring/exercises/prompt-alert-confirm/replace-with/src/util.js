/**
 * it returns a new string with replaced character.
 * @param {string} string the string to be modified
 * @param {string} oldChar old charater to be replaced
 * @param {string} newChar new charater to replace the old character
 * @returns  {string} new string with replaced character
 */
const replaceWith = (string, oldChar, newChar) => {
    let newString = '';
    for (const char of string) {
        if (char === oldChar) {
            newString += newChar;
        } else {
            newString += char;
        }
    }

    return newString;
};

export default replaceWith;
