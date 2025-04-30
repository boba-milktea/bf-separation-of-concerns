import { dom } from '../dom.js';
import { starRate } from '../handlers/starRate.js';

export const clickEvent = (elements) => {
    for (let i = 0; i < elements.length; i++) {
        dom.stars[i].id = i + 1;
        ['mouseover', 'mouseout', 'click'].forEach((el) =>
            dom.stars[i].addEventListener(el, starRate),
        );
    }
};
