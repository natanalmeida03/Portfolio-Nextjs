---
title: "setup electron and vite"
author: "Natan Almeida"
date: "December 08, 2025"
update: "December 08, 2025"
tags: ["Tutorial"]
---

After a long time, I'm back. This post will be more for me than for you.

Recently I had an idea for a desktop application and had a lot of trouble finding material explaining how to configure it to use TypeScript + React + Electron. So, after a lot of research, I'm going to document how I configured everything.

## Setup React + Typescript

When I'm developing something with React, I always prefer to use Vite, so it won't be any different here.


```bash
mkdir my-app
cd my-app
npm create vite@latest . -- --template react-ts
npm install
```

This is the standard setup for running in a browser at `http://localhost:5173`.


## Installing Electron

```bash
npm install --save-dev electron
npm install --save-dev concurrently cross-env wait-on
npm install --save-dev @types/node
```

I also install some tools that I will need.

- `concurrently`: allows you to run Vite and Electron at the same time.
- `cross-env`: sets environment variables in a Windows-compatible way.
- `wait-on`: waits for the Vite server to start up before opening Electron.

## Configuring Electron

```bash
mkdir electron
cd electron
New-Item main.ts //or touch main.ts
New-Item preload.ts //or touch preload.ts
New-Item tsconfig.json //or touch tsconfig.json
cd ..
```

The structure will look like this:

```
my-app
    - electron
        - main.ts
        - preload.ts
        - tsconfig.json
    - src
        - ...
    - package.json
    - index.html
    - tsconfig.json
    - vite.config.js
    - ...
```

in `electron/tsconfig.json`, put the typescript settings

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "Node",
    "outDir": "../dist-electron",
    "rootDir": "./",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["./**/*.ts"]
}
```

## Main settings

for the file `electron/main.ts`:

```javascript
import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

const isDev = process.env.NODE_ENV === "development";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow: BrowserWindow | null = null;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true
    }
  });

  if (isDev) {
    await mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    const indexPath = path.join(__dirname, "../dist/index.html");
    await mainWindow.loadFile(indexPath);
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

```
And on `electron/preload.ts`:

```javascript
export {};
```

It will be compiled into `dist-electron/preload.js` and loaded into the BrowserWindow's webPreferences.

in the `package.json` file in the project root add:

```json
"main": "dist-electron/main.js",
```

And change the scripts section to:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",

  "build:electron": "tsc -p electron/tsconfig.json",
  "build:all": "npm run build && npm run build:electron",

  "electron": "wait-on http://localhost:5173 && electron .",
  "dev:electron": "cross-env NODE_ENV=development concurrently \"npm run dev\" \"npm run electron\""
},
```

## Running

Now that everything is configured, run the following command to execute the application.

```bash
npm run build:all
npm run dev:electron
```

---

That's it.

I hope this helped if you were having difficulty like I was.