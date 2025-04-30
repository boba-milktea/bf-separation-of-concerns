import { loadEvent } from '../listeners/loadEvent.js';
import { clickEvent } from '../listeners/clickEvent.js';
import { dom } from '../dom.js';

loadEvent();
clickEvent(dom.btn);
