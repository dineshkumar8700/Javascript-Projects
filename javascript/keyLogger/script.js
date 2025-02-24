// Select the necessary DOM elements
const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

// Function to log key down event
function handleDown(e) {
    logDiv.textContent = `Key ${e.key} is pressed down`;
    stateDiv.textContent = 'Key is down';
}

// Function to log key up event
function handleUp(e) {
    logDiv.textContent = `Key ${e.key} is released`;
    stateDiv.textContent = 'Key is up';
}

// Event listener for the start button
startBtn.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
});

// Event listener for the stop button
stopBtn.addEventListener('click', () => {
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
});

console.log("Hello");