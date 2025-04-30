export const removeCrashRideTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
};
