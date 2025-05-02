export const tallyScore = (
    random,
    userPick,
    computerPick,
    userScore,
    computerScore,
) => {
    if (userPick === random) {
        userScore++;
    }
    if (computerPick === random) {
        computerScore++;
    }

    return { userScore, computerScore };
};
