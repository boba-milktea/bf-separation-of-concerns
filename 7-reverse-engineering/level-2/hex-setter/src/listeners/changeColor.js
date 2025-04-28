import { handleChangeColor } from '../handlers/handleChangeColor.js';

export const changeColor = (element) => {
    element.addEventListener('change', handleChangeColor);
};
