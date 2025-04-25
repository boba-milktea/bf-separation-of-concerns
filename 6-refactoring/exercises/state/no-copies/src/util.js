/**
 *  add non dublicated string to the state array
 * @param {string} [string=""] user input
 *
 */

import { state } from '../data/state.js';
const saveNoCopies = (string = '') => {
    const alreadySaved = state.noCopies.includes(string);
    if (!alreadySaved) {
        state.noCopies.push(string);
    }
};

export default saveNoCopies;
