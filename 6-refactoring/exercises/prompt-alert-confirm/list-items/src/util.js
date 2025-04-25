/**
 * return a list of strings from the user inputs
 * @param {array} [arr=[]] an array with strings
 * @returns {string} user input string list
 */
const list = (arr = []) => {
    let stringList = '';
    for (const input of arr) {
        stringList += `\n- ${input}`;
    }
    return stringList;
};

export default list;
