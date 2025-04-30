import { removeCrashRideTransition } from '../handlers/removeCrashRideTransition.js';
import { removeHiHatTopTransition } from '../handlers/removeHiHatTopTransition.js';

export const crashRideTransEvent = (element) => {
    element.addEventListener('transitionend', removeCrashRideTransition);
};

export const hiHatTopTransEvent = (element) => {
    element.addEventListener('transitionend', removeHiHatTopTransition);
};
