export const setTopMargin = (maxHeight) => {
    if (maxHeight <= 100) {
        maxHeight = maxHeight + 200;
    } else {
        maxHeight = maxHeight - 200;
    }

    return maxHeight;
};
