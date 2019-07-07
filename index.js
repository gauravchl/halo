const ipc = require('electron').ipcRenderer;

const exitBtn = document.getElementById('exit-btn');

exitBtn.addEventListener('click', () => {
  ipc.send('closeApp');
});
