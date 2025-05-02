export const placeMark = (cell, current, inputs) => {
    cell.classList.add(current);
    inputs[cell.id] = current;
};
