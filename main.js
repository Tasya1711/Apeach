const { app, BrowserWindow, ipcMain } = require('electron');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 400,
    height: 430,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html').catch(e => console.error('[main] loadFile error', e));
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on('open-menu', () => {
  if (win) {
    win.loadFile('menu.html');
  }
});

ipcMain.on('back-to-main', () => {
  if (win) {
    win.loadFile('index.html').catch(e => console.error(e));
  }
});

ipcMain.on('eating', () => {
  if (win) {
    win.loadFile('page3.html').catch(e => console.error(e));
  }
});

ipcMain.on('back-to-main-from-page3', () => {
  if (win) {
    win.loadFile('menu.html').catch(e => console.error(e));
  }
});

ipcMain.on('make-a-selfie', () => {
  if (win) {
    win.loadFile('page4.html').catch(e => console.error(e));
  }
});

ipcMain.on('back-to-main-from-page4', () => {
  if (win) {
    win.loadFile('menu.html').catch(e => console.error(e));
  }
});

ipcMain.on('sleeping', () => {
  if (win) {
    win.loadFile('page5.html').catch(e => console.error(e));
  }
});

ipcMain.on('back-to-main-from-page5', () => {
  if (win) {
    win.loadFile('menu.html').catch(e => console.error(e));
  }
});

ipcMain.on('gift-a-flower', () => {
  if (win) {
    win.loadFile('page6.html').catch(e => console.error(e));
  }
});

ipcMain.on('back-to-main-from-page6', () => {
  if (win) {
    win.loadFile('menu.html').catch(e => console.error(e));
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});