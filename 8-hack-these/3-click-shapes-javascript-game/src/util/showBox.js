import { myBox } from '../components/myBox.js';
import { state } from '../data.js';
import { random } from './random.js';

export const showBox = () => {
    state.playArea.timer = setTimeout(myBox, random(4000));
};
