export const displaySelections = (
    user,
    computer,
    playerSelection,
    computerSelection,
) => {
    playerSelection.style.color = user === 'heads' ? 'green' : 'blue';
    computerSelection.style.color = computer === 'heads' ? 'green' : 'blue';
    playerSelection.innerText = `${user}`;
    computerSelection.innerText = `${computer}`;
};
