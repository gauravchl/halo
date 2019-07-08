const { menubar } = require("menubar");
const path = require("path");
const eve = require("./eve.js");
const ipc = require('electron').ipcMain;
const storage = require('electron-json-storage');

const imagesPath = path.join(__dirname, "images");
const DEFAULT_INTERVAL = 30 //minutes

const granularity = 30 // InSeconds

setInterval(() => {
  storage.get('lastSent', (err, data) => {
    const lastSent = data.value;
    if(!lastSent) {
      eve.showMessage();
      updateLastSent();
    } else {
      storage.get('interval', (err, { value: interval}) => {
        const intervalInMS = (interval || DEFAULT_INTERVAL) * 60 * 1000
        const d1 = Number(new Date());
        const d2 = Number(new Date(lastSent));
        if((d1 - d2) > intervalInMS) {
          eve.showMessage();
          updateLastSent();
        }
      })
    }
  });

}, granularity * 1000);


const updateLastSent = () => {
  storage.set('lastSent', {value: new Date()})
}


const mb = menubar({
  browserWindow: {
    width: 200,
    height: 172,
    webPreferences: {
      nodeIntegration: true
    },
    icon: __dirname + "/build/icon.icns"
  }
});


// const intervalId = setInterval(() => {
// }, 1 * 1000)

mb.on("ready", function ready() {
  setIcon("visible.png");
  mb.tray.on("right-click", () => {
    mb.tray.setImage(`${imagesPath}/oh.png`);
    setTimeout(_ => mb.app.quit(), 500);
  });

  mb.tray.on("click", () => {
    //setIcon("hidden.png");

  });
});

const setIcon = img => {
  mb.tray.setImage(`${imagesPath}/${img}`);
  mb.tray.setHighlightMode("never");
};

ipc.on('closeApp', function(event, data){
  mb.app.quit();
});

ipc.on('showMessage', function(event, data){
  eve.showMessage();
  mb.window.hide();
});

ipc.on('updateInterval', function(event, interval){
  console.log(interval);
  storage.set('interval', {value: interval})
});

ipc.on('getInterval', function(event){
  storage.get('interval', (err, data) => {
    event.returnValue = data.value;
  });
});
