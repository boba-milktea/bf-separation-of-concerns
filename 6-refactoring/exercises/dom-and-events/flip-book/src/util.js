/**
 * return a reversed string and transformed to uppercase.
 *
 * @param {string} [text = ""] the text to be revesed and transformed
 * @returns {string} reversed string to upper case
 */

export const reverseAndUpper = (text = '') =>
    text.split('').reverse().join('').toUpperCase();
