const {app , BrowserWindow} = require('electron');  
// 1. app - controls app's event lifeCycle
// 2. BrowserWindow used to create and control browser window 
const url = require('url');
const path = require('path');

let win ;

function createWindow() {
    win = new BrowserWindow({width:800,height:600});
    win.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol : 'file',
        slashes : true
    }))
    //creating new Browser and attaching URL to it 
}

app.on('ready',createWindow);