import { startGame } from '../components/startGame.js';
import { state } from '../data.js';
export const handleReset = () => {
    state.inputs = [null, null, null, null, null, null, null, null, null];
    state.circleTurn = false;
    startGame();
};
