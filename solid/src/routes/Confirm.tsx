import './styling/Confirm.css'
import { Show, createSignal, For, type JSX } from 'solid-js'
import { type ConfirmProps, type Verification } from '../common/types'
import { decrypt, encrypt } from '../kyber/encrypt'
import { encryptAESAndStore, encryptKyberAESAndStore } from '../components/store/storage'
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

export default function Confirm (props: ConfirmProps): JSX.Element {
  if (props.renderComponent === undefined) throw Error('Missing props: renderComponent')
  if (props.mnemonic === undefined) throw Error('Missing props: mnemonic')

  const verificationArr = []
  const [verification, setVerification] = createSignal<Verification[]>([])

  const [name, setName] = createSignal('')

  // Passwords
  const [password, setPassword] = createSignal('')
  const [passwordConfirmation, setPasswordConfirmation] = createSignal('')
  const [kyberPassword, setKyberPassword] = createSignal('')
  const [kyberPasswordConfirmation, setKyberPasswordConfirmation] = createSignal('')

  const [useKyber, setUseKyber] = createSignal(false)
  const [doEnterPassword, setEnterPassword] = createSignal(false)
  const mnemonic = props.mnemonic().split(' ')
  const mnemonicLength = mnemonic.length
  console.log(mnemonicLength)

  for (let i = 0; i < 24; i += 4) {
    const mnemonicAtIndex = mnemonic[i]
    const [userInput, setUserInput] = createSignal('')
    const entry = {
      index: i + 1,
      value: mnemonicAtIndex,
      userInput,
      setUserInput,
      element: undefined
    }
    verificationArr.push(entry)
  }
  setVerification(verificationArr)
  function confirmVerification (): void {
    const currentState = verification()
    for (let i = 0; i < currentState.length; i++) {
      if (currentState[i].element?.value !== currentState[i].value) {
        console.error('Verification mismatch!'); return
      }
    }
    setEnterPassword(true)
  }

  function confirmPassword (): void {
    window.electronAPI.requestWalletList((wallets: string[]) => {
      if (wallets.includes(name())) { alert('This wallet name is occupied. Choose another wallet name.'); return }
      if (name().length === 0) return
      if (password().length === 0) return
      if (password() !== passwordConfirmation()) return

      if (useKyber()) {
        if (kyberPassword().length === 0) return
        if (kyberPassword() !== kyberPasswordConfirmation()) return
        console.log('Encrypting with Kyber!')
        const cipher: number[][] = encrypt(props.mnemonic(), kyberPassword())
        encryptKyberAESAndStore(cipher, password(), name())
        props.renderComponent('start')
      } else {
        console.log('Encrypting with AES!')
        encryptAESAndStore(props.mnemonic(), password(), name())
        props.renderComponent('start')
      }
    })
  }

  const cipher = encrypt(props.mnemonic(), 'strongpass')
  console.log(cipher)
  const decrypted = decrypt(cipher, 'strongpass')
  console.log(decrypted)
  return <>

        <div class="p-4">
          <div>

            <Show when={!doEnterPassword()}>
              <div class="mnemonic mb-4 p-2 flex flex-wrap gap-1 justify-center">

                <For each={verification()}>{(word, _i) =>
                  <div>
                    <label for="word-input" class="block text-sm font-medium mb-2">Word {word.index}</label>
                    <input ref={word.element} value={word.value} type="text" id="word-input" class=" py-3 px-4 text-sm"></input>
                  </div>
                }</For>
              </div>
              <button onClick={confirmVerification} class="w-full bg-primary btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600">Confirm recovery phrase</button>
              <p class="text-center text-sm mt-2 text-gray-600">If your recovery phrase is lost or compromised, your assets will be lost forever. Store it in a secret place, in a non-flammable location.</p>

            </Show>

            <Show when={doEnterPassword()}>
              <div>
              <label for="password-input" class="block text-sm font-medium mb-2">Wallet name</label>
                <input use:model={[name, setName]} type="text" name="password-input" class="mb-2 rounded-md w-full py-2 px-2 text-sm"></input>
                <label for="password-input" class="block text-sm font-medium mb-2">Enter password</label>
                <input use:model={[password, setPassword]} type="password" name="password-input" class="mb-2 rounded-md w-full py-2 px-2 text-sm"></input>
                <label for="password-input" class="block text-sm font-medium mb-2">Confirm password</label>
                <input use:model={[passwordConfirmation, setPasswordConfirmation]} name="password-input" type="password" class="rounded-md w-full py-2 px-2 text-sm"></input>
                <Show when={passwordConfirmation() !== password() && (password().length > 0 && passwordConfirmation().length > 0)}>
                  <p class="text-sm text-red-600">Passwords are not matching!</p>
                </Show>
                <Show when={password().length === 0 || passwordConfirmation().length === 0}>
                  <p class="text-sm text-red-600">Empty passwords are not allowed</p>
                </Show>
                <Show when={name().length === 0}>
                    <p class="text-sm text-red-600">Empty wallet names are not allowed</p>
                  </Show>
              </div>
              <div class="mb-2 mt-2">
                <label for="useKyber" class="block text-sm font-medium float-left">Use post-quantum encryption</label>
                <input use:chkbox={[useKyber, setUseKyber]} class="ml-2" type="checkbox" name="useKyber"></input>
              </div>
              <Show when={useKyber()}>
                <div class="mb-2">
                  <label for="password-input" class="block text-sm font-medium mb-2">Enter a second password</label>
                  <input use:model={[kyberPassword, setKyberPassword]} type="password" class="mb-2 rounded-md w-full py-2 px-2 text-sm"></input>
                  <label for="password-input" class="block text-sm font-medium mb-2">Confirm second password</label>
                  <input use:model={[kyberPasswordConfirmation, setKyberPasswordConfirmation]} type="password" class="rounded-md w-full py-2 px-2 text-sm"></input>
                  <Show when={((kyberPasswordConfirmation() !== kyberPassword()) || (password() === kyberPassword() && kyberPassword() === kyberPasswordConfirmation() && kyberPassword().length > 0 && kyberPasswordConfirmation().length > 0))}>
                    <Show when={kyberPasswordConfirmation() !== kyberPassword()} fallback={<p class="text-sm text-red-600 p-2">Password one cannot equal password two!</p>}>
                      <p class="text-sm text-red-600 p-2">Passwords are not matching!</p>
                    </Show>
                  </Show>
                  <Show when={kyberPassword().length === 0 || kyberPasswordConfirmation().length === 0}>
                    <p class="text-sm text-red-600 pl-2">Empty passwords are not allowed</p>
                  </Show>

                </div>
              </Show>

              <button onClick={confirmPassword} class="w-full bg-primary btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600">Confirm and encrypt wallet</button>
              <p class="text-center text-sm mt-2 text-gray-600">You have the option of securing your wallet with a quantum-secure algorithm. This requires the use of a second password. Visit <a class="underline" target="_blank" href="https://kaspx.io/">KaspX</a> for more security details.</p>

            </Show>

          </div>
        </div>

  </>
}
