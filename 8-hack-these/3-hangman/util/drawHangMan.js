import { dom } from '../dom.js';

export const canvas = () => {
    const context = dom.stickMan.getContext('2d');
    context.beginPath();
    context.strokeStyle = '#fff';
    context.lineWidth = 2;
};

export const head = () => {
    const context = dom.stickMan.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
};

export const draw = ($pathFromx, $pathFromy, $pathTox, $pathToy) => {
    const context = dom.stickMan.getContext('2d');
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
};

export const frame1 = () => {
    draw(0, 150, 150, 150);
};

export const frame2 = () => {
    draw(10, 0, 10, 600);
};

export const frame3 = () => {
    draw(0, 5, 70, 5);
};

export const frame4 = () => {
    draw(60, 5, 60, 15);
};

export const torso = () => {
    draw(60, 36, 60, 70);
};

export const rightArm = () => {
    draw(60, 46, 100, 50);
};

export const leftArm = () => {
    draw(60, 46, 20, 50);
};

export const rightLeg = () => {
    draw(60, 70, 100, 100);
};

export const leftLeg = () => {
    draw(60, 70, 20, 100);
};
