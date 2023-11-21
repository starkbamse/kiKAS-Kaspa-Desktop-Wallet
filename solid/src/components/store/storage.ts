import { AES, lib } from 'crypto-js'

function storeLocally (cipher: string[], name: string): void {
  // Assuming 'encrypted' is your encrypted data
  window.electronAPI.sendEncryptedData({ cipher, name })
}

export function encryptAESAndStore (mnemonic: string, password: string, name: string): void {
  const aesCipher = AES.encrypt(mnemonic, password)
  console.log(aesCipher.toString())
  storeLocally([aesCipher.toString()], name)
}

export function encryptKyberAESAndStore (cipher: number[][], password: string, name: string): void {
  const formattedKyberChunks = []
  for (let i = 0; i < cipher.length; i++) {
    const wordArray = lib.WordArray.create(cipher[i])
    formattedKyberChunks.push(wordArray)
  }
  const aesCipherChunks = []
  for (let i = 0; i < formattedKyberChunks.length; i++) {
    const aesCipher = AES.encrypt(formattedKyberChunks[i], password)
    aesCipherChunks.push(aesCipher.toString())
  }
  console.log('Kyber AES Cipher: ')
  storeLocally(aesCipherChunks, name)
}
