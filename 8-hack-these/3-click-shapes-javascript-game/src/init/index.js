import { dom } from '../dom/dom.js';
import { clickEvent } from '../listeners/clickEvent.js';
import { showMessage } from '../components/showMessage.js';

clickEvent(dom.button);
showMessage('Click Start to Begin!', dom.message);
