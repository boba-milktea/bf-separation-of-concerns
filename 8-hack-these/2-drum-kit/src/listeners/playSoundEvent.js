import { playSound } from '../handlers/playSound.js';

export const playSoundEvent = () => {
    window.addEventListener('keydown', playSound);
};
