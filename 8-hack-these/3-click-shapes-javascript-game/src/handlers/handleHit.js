import { myBox } from '../components/myBox.js';
import { state } from '../data.js';
import { dom } from '../dom/dom.js';
import { showMessage } from '../util/showMessage.js';
import { resetGame } from '../util/resetGame.js';
import { random } from '../util/random.js';
import { renderCount } from '../util/renderCount.js';

let count = 0;
export const hit = (e) => {
    const start = e.target.start;
    const end = new Date().getTime();
    const duration = (end - start) / 1000;
    const maxDuration = 1;

    clearTimeout(state.playArea.timer);
    showMessage(`it took you ${duration} seconds to click`);

    if (duration > maxDuration) {
        dom.gameArea.children[0].remove();
        dom.results.innerHTML = `Too Slow! <span id="loser">You Lose!</span> Your score was ${count}.<br> Click the start button to play again!`;
        resetGame();
    } else {
        count++;
        dom.gameArea.children[0].remove();
        state.playArea.timer = setTimeout(myBox, random(4000));

        console.log(count);
        if (count === 15) {
            dom.results.innerHTML = `You reached ${renderCount(
                count,
            )}! <span id="winner">You win!</span> <br> Click start to Play again.`;
            resetGame();
        } else {
            dom.results.innerHTML = `Score: ${renderCount(count)} of 15`;
        }
    }
};
