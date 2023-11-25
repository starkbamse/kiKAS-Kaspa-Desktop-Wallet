import { For, onMount, type JSX, createSignal, Show } from 'solid-js'
import { type OpenProps } from '../common/types'
import { createStore } from 'solid-js/store'
import './styling/Open.css'
import { AES, enc } from 'crypto-js'
import { decrypt } from '../kyber/encrypt'

// import { decrypt } from '../kyber/encrypt'
// type lib
// @ts-expect-error TS does not understand JSX syntax, therefore we remove it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function model (element: HTMLInputElement, userInput: () => [() => boolean, (boolean) => void]): void {
  const [, updateElementState] = userInput()
  element.addEventListener('input', (e) => { updateElementState((e.currentTarget as HTMLInputElement).value) })
}
// @ts-expect-error TS does not understand JSX syntax, therefore we remove it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function chkbox (element: HTMLInputElement, userInput: () => [() => boolean, (boolean) => void]): void {
  const [, updateElementState] = userInput()
  element.addEventListener('change', (e) => { updateElementState((e.currentTarget as HTMLInputElement).checked) })
}

export function Open (props: OpenProps): JSX.Element {
  if (props.renderComponent === undefined) throw Error('Missing props: renderComponent')

  function renderComponent (name: string): void {
    props.renderComponent(name)
  }
  let aesCipher: string[] = []
  // const kyberCipher = []

  const [aesPassword, setAesPassword] = createSignal('')
  const [kyberPassword, setKyberPassword] = createSignal('')
  const [decryptKyber, setDecryptKyber] = createSignal(false)
  const [wallets, setWallets] = createStore([])
  const [selectedWallet, setSelectedWallet] = createSignal('')
  function getWallets (): void {
    window.electronAPI.requestWalletList((walletList: string[]) => {
      let updatedState = JSON.parse(JSON.stringify(wallets))
      updatedState = walletList
      setWallets(updatedState)
      selectWallet(wallets[0])
    })
  }

  function selectWallet (name: string): void {
    setSelectedWallet(name)
    window.electronAPI.requestEncryptedData(selectedWallet(), (encryptedData: string[]) => {
      aesCipher = encryptedData
      if (encryptedData.length > 1) {
        setDecryptKyber(true)
      } else {
        setDecryptKyber(false)
      }
    })
  }

  function openWallet (): void {
    console.log('Unlocking ' + selectedWallet())
    let mnemonic: string
    try {
      if (decryptKyber()) {
        const kyberCipher = []
        for (let i = 0; i < aesCipher.length; i++) {
          const kyberChunk = AES.decrypt(aesCipher[i], aesPassword())
          kyberCipher.push(kyberChunk.words)
        }
        mnemonic = (decrypt(kyberCipher, kyberPassword())).toString()
      } else {
        mnemonic = enc.Utf8.stringify(AES.decrypt(aesCipher[0], aesPassword()))
      }
      const mnemonicArr = mnemonic.split(' ')
      if (mnemonicArr.length !== 24) throw Error('Invalid mnemonic')
      sessionStorage.setItem('mnemonic', mnemonic)
      renderComponent('wallet')
    } catch (err) {
      console.log(err)
      alert('Invalid password!')
    }
  }

  onMount(() => {
    getWallets()
  })
  return <>

        <div class="p-4">
          <div>
            <p class="mb-2">Select wallet</p>
            <div class="mnemonic mb-4 p-2">
              <ul>
              <For each={wallets}>{(wallet, _i) =>
                   <li onClick={[selectWallet, wallet]}>
                    <p class={`${selectedWallet() === wallet ? 'selectedWallet p-1' : 'walletList-wallet p-1'}`}>{wallet}</p>
                   </li>
                }</For>

              </ul>
            </div>

                <div>
                <label for="password-input" class="block text-sm font-medium mb-2">Enter password</label>
                <input use:model={[aesPassword, setAesPassword]} type="text" name="password-input" class="mb-2 w-full py-2 px-2 text-sm"></input>
                <Show when={decryptKyber()}>
                  <label for="password-input" class="block text-sm font-medium mb-2">Enter password used for PQE</label>
                  <input use:model={[kyberPassword, setKyberPassword]} type="text" name="password-input" class="mb-2 w-full py-2 px-2 text-sm"></input>
                </Show>
                </div>

            <button onClick={openWallet} class="w-full bg-primary btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600">Open</button>

            <p class="text-center text-sm mt-2 text-gray-600">Ensure other people cannot peek at your screen. If your recovery phrase is compromised, your assets may be lost forever.</p>

          </div>
        </div>

    </>
}
