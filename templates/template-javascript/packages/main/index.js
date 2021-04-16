
const { app, BrowserWindow } = require('electron');
const { resolve } = require('path')
function createWindow() {
    const win = new BrowserWindow({
        center: true,
        width: 1366,
        height: 800,
        minHeight: 768,
        minWidth: 1366,
        useContentSize: true,
        autoHideMenuBar: process.env.MODE !== 'development',
        webPreferences: {
            preload: resolve(__dirname, '../preload/index.js'),
            devTools: process.env.MODE === 'development',
            webSecurity: false,
            nodeIntegration: true,
            contextIsolation: false,
            nodeIntegrationInWorker: true,
            nativeWindowOpen: false
        }
    });
    win.setAspectRatio(1366 / 800);
    if (process.env.MODE === 'development') {
        win.loadURL(process.env.VITE_DEV_SERVER_URL).then(()=>{
            win.webContents.openDevTools();
        })
    } else {
        win.loadFile(resolve(__dirname, '../render-build/index.html')).then(r => {});
    }
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});