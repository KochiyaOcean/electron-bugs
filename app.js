let { BrowserWindow, app } = require('electron')
console.log('barfoo')
app.on('ready', async function() {
  let main;
  main = new BrowserWindow({
    webPreferences: {
      affinity: 'test',
    }
  });
  main.loadURL("https://github.com");
  while (true) {
    let subWindow;
    subWindow = new BrowserWindow({
      webPreferences: {
        affinity: 'test',
      }
    });
    subWindow.loadURL("https://github.com");
    subWindow.webContents.on('dom-ready', () => {
      subWindow.close()
    })
    await new Promise(res => {
      setTimeout(res, 1000)
    })
  }
});
