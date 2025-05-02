export const canvas = (stickMan) => {
    const context = stickMan.getContext('2d');
    context.beginPath();
    context.strokeStyle = '#fff';
    context.lineWidth = 2;
};

export const head = (stickMan) => {
    const context = stickMan.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
};

export const draw = (stickMan, $pathFromx, $pathFromy, $pathTox, $pathToy) => {
    const context = stickMan.getContext('2d');
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
};

export const frame1 = (stickMan) => {
    draw(stickMan, 0, 150, 150, 150);
};

export const frame2 = (stickMan) => {
    draw(stickMan, 10, 0, 10, 600);
};

export const frame3 = (stickMan) => {
    draw(stickMan, 0, 5, 70, 5);
};

export const frame4 = (stickMan) => {
    draw(stickMan, 60, 5, 60, 15);
};

export const torso = (stickMan) => {
    draw(stickMan, 60, 36, 60, 70);
};

export const rightArm = (stickMan) => {
    draw(stickMan, 60, 46, 100, 50);
};

export const leftArm = (stickMan) => {
    draw(stickMan, 60, 46, 20, 50);
};

export const rightLeg = (stickMan) => {
    draw(stickMan, 60, 70, 100, 100);
};

export const leftLeg = (stickMan) => {
    draw(stickMan, 60, 70, 20, 100);
};
