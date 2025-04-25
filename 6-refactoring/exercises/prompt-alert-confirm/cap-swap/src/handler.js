import capSwap from './util.js';

export const capSwapHandler = () => {
    let userInput = null;
    while (userInput === null) {
        userInput = prompt('enter a string to cap-swap');
    }
    const result = capSwap(userInput);
    alert(result);
};
