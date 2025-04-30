import { loadEvent } from '../listeners/loadEvent.js';
import { getHintEvent } from '../listeners/getHintEvent.js';
import { resetEvent } from '../listeners/resetEvent.js';
import { keyClickEvent } from '../listeners/keyClickEvent.js';
import { dom } from '../dom.js';

loadEvent();
getHintEvent(document.getElementById('hint'));
resetEvent(document.getElementById('reset'));
keyClickEvent(dom.buttons);
