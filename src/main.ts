import { app, BrowserWindow } from "electron";
import waitOn from "wait-on";
import * as path from "path";

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const devServerUrl = "http://localhost:3000/";

  if (process.env.NODE_ENV === "development") {
    try {
      await waitOn({ resources: [devServerUrl], timeout: 5000 });
      mainWindow.loadURL(devServerUrl);
    } catch (err) {
      console.error("Dev server is not running:", err);
    }
  } else {
    // Carregue o arquivo index.html no modo de produção
    mainWindow.loadFile(path.join(__dirname,"dist/frontend/index.html"));
    mainWindow.loadURL("http://localhost:3000/login");
  }
};

app.whenReady().then(createWindow);
