/**
 *  add numbers to the array and save the averaged result to average.
 * @param {number} num user input tranformed to number
 *
 */

import { state } from '../data/state.js';
const average = (num) => {
    state.numbers.push(num);
    state.average =
        state.numbers.reduce((sum, next) => sum + next, 0) /
        state.numbers.length;
};

export default average;
