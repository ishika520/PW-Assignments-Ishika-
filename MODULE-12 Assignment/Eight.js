let count = 10;
const countdownElement = document.getElementById('countdown');

const countdown = setInterval(() => {
    countdownElement.textContent = count;
    count--;

    if (count < 0) {
        clearInterval(countdown);
        countdownElement.textContent = 'Done!';
    }
}, 1000);
