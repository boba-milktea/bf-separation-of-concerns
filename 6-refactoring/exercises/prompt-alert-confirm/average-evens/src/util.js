/**
 * return the averaged number for an array of numbers
 * @param {array} [arr = []] an array with numbers
 * @returns {number} averaged number of the array
 */
const averageEvens = (arr = []) => {
    let howManyEvens = 0;
    let sumOfEvens = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            sumOfEvens = sumOfEvens + num;
            howManyEvens = howManyEvens + 1;
        }
    }
    const average = howManyEvens === 0 ? 0 : sumOfEvens / howManyEvens;
    return average;
};

export default averageEvens;
