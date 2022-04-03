// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
var ipc = require('electron').ipcMain;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

/*
lancer : npm run start
Pour avoir un executable : npm i electron-packager --save-dev
pour avoir les droit de packager il faut power shell en admin puis :
set-executionpolicy unrestricted
dire "o"
Set-ExecutionPolicy RemoteSigned
pour remettre comme avant
electron-packager .

ctrl + shift + i
*/




/*
app.addListener('before-quit', function(e){
    const fs = require('fs');
    
    let aSave = document.querySelector('.titre').innerHTML;
    console.log("aSave = "+aSave);
    try { 
      fs.writeFileSync('save/save.js', aSave, 'utf-8'); 
    }catch(e) { alert('Failed to save the file !'); }
  
  })


  /*
  app.addEventListener('beforeunload', function(e){
    const fs = require('fs');
    
    let aSave = this.document.querySelector('#titre').innerHTML;
  
    try { 
      fs.writeFileSync('save/save.js', aSave, 'utf-8'); 
    }catch(e) { alert('Failed to save the file !'); }
  
  })
  */
