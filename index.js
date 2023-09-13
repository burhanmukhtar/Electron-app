const { app, BrowserWindow } = require("electron");

const url = require("url");
const path = require("path");

const createMainFunction = () => {
  const mainWindow = new BrowserWindow({
    title: "Electron App",
    width: 800,
    height: 500,
    webPreferences: { webSecurity: false },
  });

  mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(startUrl);
};

app.whenReady().then(createMainFunction);
