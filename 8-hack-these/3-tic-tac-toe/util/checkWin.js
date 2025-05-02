export const checkWin = (winCombination, inputs) => {
    let haveAwinner = false;
    for (const [a, b, c] of winCombination) {
        if (inputs[a] && inputs[a] === inputs[b] && inputs[a] === inputs[c]) {
            haveAwinner = true;
        }
    }
    return haveAwinner;
};
