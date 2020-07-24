/**
 * @file Electron 主进程
 *
 * @see {@link https://github.com/electron-userland/electron-webpack-quick-start/blob/master/src/main/index.js}
 *
 * @version 2020-07-23
 * @since 2020-07-22
 * @author zhengrr
 * @license Unlicense
 */

'use strict'

import { BrowserWindow, app } from 'electron'
import path from 'path'
import url from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production'
let mainWindow

function createMainWindow () {
  const window = new BrowserWindow({
    frame: false,
    webPreferences: { nodeIntegration: true, enableRemoteModule: true }
  })

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(url.format({
      protocol: 'file',
      slashes: true,
      pathname: path.join(__dirname, 'index.html'),
    }))
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

app.on('ready', () => {
  mainWindow = createMainWindow()
})

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
