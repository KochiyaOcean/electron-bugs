var BrowserWindow = require('electron').BrowserWindow;
var app = require('electron').app;
app.commandLine.appendSwitch('disable-site-isolation-trials', true)
app.on('ready', function() {
  var mainWindow;
  mainWindow = new BrowserWindow({
    webPreferences: {
      plugins: true,
      webviewTag: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nativeWindowOpen: true,
      // enableRemoteModule: true,
      contextIsolation: false,
      // spellcheck: false,
    },
  });
  mainWindow.loadURL("file://"+ __dirname + "/index.html");
  mainWindow.openDevTools({detach: true});
  mainWindow.webContents.addListener('new-window', (e, url, frameName, disposition, options, additionalFeatures) => {
    e.preventDefault()
    options = {
      ...options,
      minWidth: 200,
      minHeight: 200,
      webPreferences: {
        nodeIntegration: false,
        nodeIntegrationInWorker: false,
        enableRemoteModule: true,
        plugins: true,
        sandbox: false,
        webviewTag: true,
        contextIsolation: false,
      },
    }
    const win = new BrowserWindow(options)
    e.newGuest = win
  })
});
