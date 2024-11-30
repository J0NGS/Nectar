import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow;

app.on("ready", () => {
  console.log("App is ready");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const isDev = process.env.NODE_ENV === "development";
  console.log("Environment:", isDev ? "Development" : "Production");

  if (isDev) {
    console.log("Loading from Vite Dev Server...");
    mainWindow
      .loadURL("http://localhost:3000")
      .catch((err) => console.error("Failed to load URL:", err));
  } else {
    const indexPath = path.join(__dirname, "../dist/frontend/index.html");
    console.log("Loading from:", indexPath);
    mainWindow
      .loadFile(indexPath)
      .catch((err) => console.error("Failed to load file:", err));
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
