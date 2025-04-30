import { dom } from '../dom/dom.js';

export const animateCrashOrRide = () => {
    dom.crashRide.style.transform = 'rotate(0deg) scale(1.5)';
};

export const animateHiHatClosed = () => {
    dom.hiHatTop.style.top = '171px';
};
