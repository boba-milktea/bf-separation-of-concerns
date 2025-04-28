export const changeHandler = (e) => {
    const colorValue = e.target.value;
    if (colorValue) {
        document.body.style.backgroundColor = colorValue;
    }
};
