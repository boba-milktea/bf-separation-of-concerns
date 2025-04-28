import modifyText from '../logic/util.js';

let string = null;
let begin = null;
let end = null;

export const changeHandler = (e) => {
    e.preventDefault();

    if (e.target.name === 'string' && e.target.value) {
        string = e.target.value;
    }
    if (e.target.name === 'begin' && e.target.value) {
        begin = e.target.value;
    }
    if (e.target.name === 'end' && e.target.value) {
        end = e.target.value;
    }

    if (string && begin && end) {
        document.getElementById('program-output').innerText = modifyText(
            string,
            begin,
            end,
        );
    }
};
