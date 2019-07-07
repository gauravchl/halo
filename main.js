const { menubar } = require("menubar");
const path = require("path");
const eve = require("./eve.js");
const ipc = require('electron').ipcMain;
const imagesPath = path.join(__dirname, "images");
const interval = 0.05; // In Minutes


const mb = menubar({
  browserWindow: {
    width: 200,
    height: 200,
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
    setIcon("hidden.png");
    eve.showMessage();
  });
});

const setIcon = img => {
  mb.tray.setImage(`${imagesPath}/${img}`);
  mb.tray.setHighlightMode("never");
};

ipc.on('closeApp', function(event, data){
  console.log("Response received")
  mb.app.quit();
});
