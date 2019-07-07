const ipc = require('electron').ipcRenderer;

const exitBtn = document.getElementById('exit-btn');
const stressBtn = document.getElementById('stress-btn');
const aboutBtn = document.getElementById('about-btn');

exitBtn.addEventListener('click', () => {
  ipc.send('closeApp');
});

stressBtn.addEventListener('click', () => {
  ipc.send('showMessage');
});

aboutBtn.addEventListener('click', () => {
  ipc.send('closeApp');
});
