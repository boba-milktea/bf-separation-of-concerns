import {
    animateCrashOrRide,
    animateHiHatClosed,
} from '../../components/animation.js';

export const playSound = (e) => {
    const keyCode = e.keyCode,
        keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    switch (keyCode) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
            animateHiHatClosed();
            break;
    }
    keyElement.classList.add('playing');
};
