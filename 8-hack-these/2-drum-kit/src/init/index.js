import { playSoundEvent } from '../listeners/playSoundEvent.js';
import {
    crashRideTransEvent,
    hiHatTopTransEvent,
} from '../listeners/removeTransition.js';
import { dom } from '../dom/dom.js';

playSoundEvent();
crashRideTransEvent(dom.crashRide);
hiHatTopTransEvent(dom.hiHatTop);
