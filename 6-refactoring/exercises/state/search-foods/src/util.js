/**
 *  return the strings that match to query
 * @param {string} query user input as query
 * @return {string} the matched string in the foods array
 */
import { state } from '../data/data.js';

const search = (query) => {
    const results = state.foods
        .filter((food) => food.includes(query))
        .map((food) => `\n- ${food}`)
        .join('');

    return results;
};

export default search;
