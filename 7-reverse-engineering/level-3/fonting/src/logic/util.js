import { data } from '../data.js';

const addStyle = (name, style, editor) => {
    if (data[name]) editor.classList.remove(data[name]);
    data[name] = style === 'none' ? null : style;
    if (data[name]) editor.classList.add(style);
};

export default addStyle;
