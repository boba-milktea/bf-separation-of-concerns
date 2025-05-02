export const setLeftMargin = (maxWidth) => {
    if (maxWidth <= 100) {
        maxWidth = maxWidth + 200;
    } else {
        maxWidth = maxWidth - 200;
    }

    return maxWidth;
};
