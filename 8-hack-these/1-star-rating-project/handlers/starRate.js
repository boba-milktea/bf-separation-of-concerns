import { dom } from '../dom.js';

export const starRate = (e) => {
    const type = e.type;
    const starValue = Number(e.currentTarget.id);
    if (type === 'click') {
        if (starValue > 0) {
            dom.output.innerText = `You rated this ${starValue} stars`;
        }
    }
    dom.stars.forEach((star, i) => {
        if (type === 'click') {
            if (i < starValue) {
                star.classList.add('orange');
            } else {
                star.classList.remove('orange');
            }
        }

        if (type === 'mouseover') {
            if (i < starValue) {
                star.classList.add('yellow');
            } else {
                star.classList.remove('yellow');
            }
        }
        if (type === 'mouseout') {
            star.classList.remove('yellow');
        }
    });
};
