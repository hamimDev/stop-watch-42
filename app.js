let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    const display = document.getElementById('display');
    display.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
