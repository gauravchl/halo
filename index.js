const ipc = require('electron').ipcRenderer;
var shell = require('electron').shell
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
  shell.openExternal("https://github.com/gauravchl/halo");
});

intervalBtn.addEventListener('input', (e) => {
  const min = e.target.value;
  ipc.send('updateInterval', parseInt(min));
  updateIntervalText(min);
});


const updateIntervalText = min => {
  const time = min >= 60 ? `${min/60} hour` : `${min}min`;
  const text = `whop whop in every ${time}`
  document.getElementById('interval-label').innerText = text;
}


// Set interval from storage
const initialInterval = ipc.sendSync('getInterval') || DEFAULT_INTERVAL;
updateIntervalText(initialInterval)
intervalBtn.value = initialInterval;

console.log("#GC - initialInterval", initialInterval)
