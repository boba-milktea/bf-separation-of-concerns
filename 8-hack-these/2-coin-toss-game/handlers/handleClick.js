import { dom } from '../dom.js';
import { state } from '../data.js';
import { displaySelections } from '../components/displaySelections.js';
import { displayRandom } from '../components/displayRandom.js';
import { tallyScore } from '../components/tallyScore.js';

export const handleClick = (e) => {
    const random = Math.round(Math.random());
    const computerPick = Math.round(Math.random());

    let computerSelection;
    computerSelection = computerPick === 1 ? 'heads' : 'tails';

    //spin the coin
    dom.coin.classList.add('animate');

    const userSelection = e.target.id;
    let userPick;
    userPick = userSelection === 'heads' ? 1 : 0;

    displaySelections(
        userSelection,
        computerSelection,
        dom.playerSelection,
        dom.computerSelection,
    );
    displayRandom(random, dom.coin);

    setTimeout(() => {
        const result = tallyScore(
            random,
            userPick,
            computerPick,
            state.userScore,
            state.computerScore,
            dom.winner,
        );

        state.userScore = result.userScore;
        state.computerScore = result.computerScore;
        dom.playerDisplay.textContent = `${state.userScore}`;
        dom.computerDisplay.textContent = `${state.computerScore}`;

        if (state.userScore === 5 && state.computerScore === 5) {
            dom.winner.innerHTML = `<h1>It's a Tie</h1>`;
        } else if (state.userScore === 5) {
            dom.winner.innerHTML = `<h1>You Win!!!</h1>`;
        } else if (state.computerScore === 5) {
            dom.winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
        }
        dom.coin.classList.remove('animate');
    }, 2000);
};
