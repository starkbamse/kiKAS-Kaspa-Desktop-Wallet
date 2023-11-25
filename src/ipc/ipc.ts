import { storeNewWallet, getDirectories, getDirectoriesSync, getChunks } from "../wallet/wallet"
import { ipcMain } from "electron"
import * as path from "path"
import { getUtxosByAddresses, setClient } from "../rpc/rpc"

export async function startIPCListener() {
    ipcMain.on('newWallet', (/** @type {Electron.IpcMainEvent} */ event,
                                /** @type {string[]} */ data) => {
        storeNewWallet(data)
    })
    ipcMain.handle('requestWalletList', () => {
        const wallets = getDirectoriesSync("storage");
        console.log(wallets);
        return wallets;
    });
    ipcMain.handle('requestEncryptedData', (event, arg) => {
        // arg will be the string parameter sent from renderer process.
        // You can now process this string and return a string array as required.
        const walletDir = path.join("storage", arg);

        const encryptedData = getChunks(walletDir);
        return encryptedData;
    });

    //Rpc methods
    ipcMain.handle('requestUTXO', async (event, arg:string) => {
        const accountDetail=await getUtxosByAddresses(arg)
        return accountDetail;
    });    
    ipcMain.handle('requestRPCConnect',async (event, arg:string) => {
        const serverStatus = await setClient(arg);
        return serverStatus;
    });    
    
}

