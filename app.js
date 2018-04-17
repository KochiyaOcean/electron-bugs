let { BrowserWindow, app } = require('electron')
console.log('barfoo')
app.on('ready', async function() {
  let main;
  main = new BrowserWindow({
    webPreferences: {
      nativeWindowOpen: true,
    }
  });
  main.loadURL("https://github.com");
  main.webContents.on('dom-ready', () => main.webContents.executeJavaScript(`
    (async function() {
      while (true) {
        let t = window.open("https://github.com")
        await new Promise(res => {
          setTimeout(res, 1000)
        })
        t.close()
        await new Promise(res => {
          setTimeout(res, 1000)
        })
      }
    })()
  `))
});
