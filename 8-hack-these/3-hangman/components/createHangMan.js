export const createHangMan = (lives, drawArray, stickMan) => {
    if (lives > -1) {
        const drawMan = lives;
        drawArray[drawMan](stickMan);
    }
};
