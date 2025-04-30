import { random } from './random.js';
export const getColor = () => {
    const col = () => {
        const hex = random(255).toString(16);
        console.log('0' + String(hex));
        return ('0' + String(hex)).slice(-2);
    };
    return '#' + col() + col() + col();
};
