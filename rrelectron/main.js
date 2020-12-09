// 主进程

'use strict'

const { BrowserWindow, app } = require('electron')

function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载 index.html 文件
  mainWindow.loadFile('./index.html')

  // 打开开发者工具
  mainWindow.webContents.openDevTools()
}

// Electron 会在初始化完成并且准备好创建浏览器窗口时调用这个方法，
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当所有窗口都被关闭后退出
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击 dock 图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
