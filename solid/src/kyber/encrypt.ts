import { stringToByteNumbers, byteNumbersToString, chunkString } from '../common/common'
import { Kyber768Service } from './services/kyber768.service'
import { SHA256 } from 'crypto-js'

export function decrypt (cipher: number[][], password: string): string {
  const kyber = new Kyber768Service()
  const [, secretKey] = kyber.generateKyberKeysFromSeed(stringToByteNumbers(SHA256(password).toString()))

  const decrypted = []
  for (let i = 0; i < cipher.length; i++) {
    const decryptedChunk = byteNumbersToString(kyber.decryptm(cipher[i], secretKey))
    decrypted.push(decryptedChunk)
  }
  return decrypted.join('')
}

export function encrypt (mnemonic: string, password: string): number[][] {
  const kyber = new Kyber768Service()
  const passwordBytes = stringToByteNumbers(SHA256(password).toString())
  const mnemonicBytes = chunkString(mnemonic)
  const [publicKey] = kyber.generateKyberKeysFromSeed(passwordBytes)

  const cipheredArray = []
  for (let i = 0; i < mnemonicBytes.length; i++) {
    const cipher = kyber.encryptm(publicKey, mnemonicBytes[i])
    cipheredArray.push(cipher)
  }

  return cipheredArray
}
