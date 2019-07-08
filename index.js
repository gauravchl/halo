const ipc = require('electron').ipcRenderer;
const DEFAULT_INTERVAL = 30;
const exitBtn = document.getElementById('exit-btn');
const stressBtn = document.getElementById('stress-btn');
const aboutBtn = document.getElementById('about-btn');
const intervalBtn = document.getElementById('interval-btn');

exitBtn.addEventListener('click', () => {
  ipc.send('closeApp');
});

stressBtn.addEventListener('click', () => {
  ipc.send('showMessage');
});

aboutBtn.addEventListener('click', () => {
  ipc.send('closeApp');
});

intervalBtn.addEventListener('input', (e) => {
  const min = e.target.value;
  ipc.send('updateInterval', parseInt(min));
  updateIntervalText(min);
});


const updateIntervalText = min => {
  const time = min >= 60 ? `${min/60} Hour` : `${min} Minutes`;
  const text = `Interval: ${time}`
  document.getElementById('interval-label').innerText = text;
}


// Set interval from storage
const initialInterval = ipc.sendSync('getInterval') || DEFAULT_INTERVAL;
updateIntervalText(initialInterval)
intervalBtn.value = initialInterval;

console.log("#GC - initialInterval", initialInterval)
