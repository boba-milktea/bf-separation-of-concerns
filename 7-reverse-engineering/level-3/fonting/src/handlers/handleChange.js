import addSytle from '../logic/util.js';

export const handleChange = (e) => {
    const editor = document.getElementById('editor');
    addSytle(e.target.name, e.target.value, editor);
};
