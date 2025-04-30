import { makeColor } from './makeColor.js';

export const genRandomColors = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
};
