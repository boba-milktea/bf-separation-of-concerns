import { playSound } from '../handlers/playSound.js';

export const keyDownEvent = () => {
    window.addEventListener('keydown', playSound);
};
