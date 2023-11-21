// Function that takes a string and converts it into a padded byte number array of length 32
export function stringToByteNumbers (s: string): number[] {
  const byteArray = []
  for (let i = 0; i < s.length; i++) {
    byteArray.push(s.charCodeAt(i))
    if (byteArray.length === 32) break // break if length reaches 32
  }
  while (byteArray.length < 32) { // pad with zeros if length is less than 32
    byteArray.push(0)
  }
  return byteArray
}

// Function that converts back
export function byteNumbersToString (byteArray: number[]): string {
  let str = ''
  for (let i = 0; i < byteArray.length; i++) {
    if (byteArray[i] === 0) break // break if encounter padding
    str += String.fromCharCode(byteArray[i])
  }
  return str
}
export function chunkString (s: string): number[][] {
  const chunks = []
  for (let i = 0; i < s.length; i += 32) {
    const strChunk = s.substring(i, i + 32) // get a chunk of the string
    const byteChunk = stringToByteNumbers(strChunk) // convert it to bytes
    chunks.push(byteChunk)
  }
  return chunks
}
