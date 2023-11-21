import * as fs from 'fs';
import * as path from 'path';

type Wallet = {
    name:string,
    cipher:string[]
}

export const getDirectoriesSync = (src:string) => {
    try {
        return fs.readdirSync(path.join(__dirname, src)).filter(file => fs.statSync(path.join(__dirname, path.join(src, file))).isDirectory());
    } catch (err) {
        console.log('Error getting directories ' + err);
        return [];
    }
};

export const getChunks = (src:string) => fs.readdirSync(path.join(__dirname, src))
    .filter(file => file.startsWith('chunk'))
    .map(chunkFile => fs.readFileSync(path.join(__dirname, path.join(src, chunkFile)), 'utf-8'));

export const getDirectories = (src:string, callback:(err:NodeJS.ErrnoException,files:string[])=>void) => fs.readdir(path.join(__dirname, src), (err, files) => {
    if (err) {
        console.log('Error getting directories ' + err);
        callback(err,null);
    } else {
        callback(null, files.filter(file => fs.statSync(path.join(__dirname, path.join(src, file))).isDirectory()));
    }
});

export const checkDirectorySync = (directory:string) => {
    try {
        fs.statSync(path.join(__dirname, directory));
    } catch (e) {
        fs.mkdirSync(path.join(__dirname, directory));
    }
};

export const storeNewWallet = async (wallet:Wallet) => {
    const walletPath = "storage/" + wallet.name;
    getDirectories("storage", (err, result) => {
        if (err || result.includes(wallet.name)) {
            console.log('Error! Directory already exists.');
            return;
        }
        checkDirectorySync(walletPath);
        wallet.cipher.forEach((chunk, i) => fs.writeFileSync(path.join(__dirname, path.join(walletPath, 'chunk' + i)), chunk));
        console.log('Wallet stored successfully');
    });
};
