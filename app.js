var BrowserWindow = require('electron').BrowserWindow;
var app = require('electron').app;
app.on('ready', function() {
  var mainWindow;
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
      webviewTag: true,
    }
  });
  mainWindow.loadURL("file://"+ __dirname + "/index.html");
  mainWindow.openDevTools({detach: true});
});
