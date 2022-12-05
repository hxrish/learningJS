const input = document.querySelector('#yes');
const output = document.querySelector('#output');

input.addEventListener('keydown', (event) => output.textContent = `${event.key}`);