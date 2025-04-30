import { dom } from '../dom/dom.js';

export const showMessage = (notification) =>
    (dom.message.innerHTML = `<h3>${notification}</h3>`);
