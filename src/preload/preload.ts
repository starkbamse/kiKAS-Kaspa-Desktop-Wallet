import {ipcRenderer, contextBridge} from "electron"

contextBridge.exposeInMainWorld('electronAPI', {
    sendEncryptedData: (arg:string[]) => ipcRenderer.send('newWallet', arg),
    requestEncryptedData: (arg:string, func:any) => {
        ipcRenderer.invoke('requestEncryptedData', arg).then(func);
    },
    requestUTXO: (arg:string, func:any) => {
        ipcRenderer.invoke('requestUTXO', arg).then(func);
    },
    requestRPCConnect: (arg:string, func:any) => {
        ipcRenderer.invoke('requestRPCConnect', arg).then(func);
    },    
    requestWalletList: (func:any) => ipcRenderer.invoke('requestWalletList').then(func),
});