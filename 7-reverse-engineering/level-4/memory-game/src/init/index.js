import { loadEvent } from '../listeners/loadEvent.js';
import { clickEvent } from '../listeners/clickEvent.js';
import { mouseOverEvent } from '../listeners/hoverEvent.js';
import { mouseOutEvent } from '../listeners/hoverEvent.js';
import { resetEvent } from '../listeners/resetEvent.js';

const boardContainer = document.getElementById('board-container');

loadEvent();
clickEvent(boardContainer);
mouseOverEvent(boardContainer);
mouseOutEvent(boardContainer);
resetEvent(document.getElementById('reset-button'));
