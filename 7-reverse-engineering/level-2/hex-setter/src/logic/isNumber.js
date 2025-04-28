export const isNumber = (input) => {
    console.log(input);
    const isNumber = !isNaN(input);
    return isNumber ? Number(input) : input;
};
