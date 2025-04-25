import { capSwapHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', capSwapHandler);
};
