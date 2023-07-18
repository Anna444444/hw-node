const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('backend', {
    save: (text) => ipcRenderer.invoke('save', text),
    open: () => ipcRenderer.send('open')
});

ipcRenderer.on('fileOpened', (event, content) => {
    document.getElementById('main-area').innerHTML = content;
});
