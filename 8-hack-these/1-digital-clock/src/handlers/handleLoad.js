import { showTime } from '../logic/showTime.js';

export const handleLoad = () => {
    let time = showTime();
    setTimeout(handleLoad, 1000);

    document.getElementById('MyClockDisplay').textContent = time;
};
