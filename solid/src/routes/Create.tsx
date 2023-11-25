import './styling/Create.css'
import * as kaspa_wasm from '../../public/kaspa/kaspa_wasm.js'
import { Show, type JSX, createSignal } from 'solid-js'
import { type CreateProps } from '../common/types.js'

export default function Create (props: CreateProps): JSX.Element {
  if (props.componentState === undefined) throw Error('Missing props: componentState')
  if (props.renderComponent === undefined) throw Error('Missing props: renderComponent')
  if (props.setMnemonic === undefined) throw Error('Missing props: setMnemonic')
  function assertKaspa (): boolean {
    if (kaspa === undefined) return false
    return true
  }
  let kaspa: kaspa_wasm.InitOutput
  void (async () => {
    kaspa = await kaspa_wasm.default('kaspa/kaspa_wasm_bg.wasm')
  })()
  const [proceed, setProceed] = createSignal(false)
  const [mnemonic, setMnemonic] = createSignal('...')

  function generateMnemonic (): void {
    if (!assertKaspa()) { console.log('Not connected to WASM'); return }
    const newMnemonic: kaspa_wasm.Mnemonic = kaspa_wasm.Mnemonic.random().toJSON() as kaspa_wasm.Mnemonic
    setMnemonic(newMnemonic.phrase)
    props.setMnemonic(newMnemonic.phrase)
    setProceed(true)
    const rpc = new kaspa_wasm.RpcClient('161.97.134.217:17110', kaspa_wasm.Encoding.Borsh, kaspa_wasm.NetworkType.Mainnet)
    console.log(rpc)
  }
  function renderComponent (name: string): void {
    props.renderComponent(name)
  }

  return <>

        <div class="p-4">
          <div>
            <div class="mnemonic mb-4 p-2">
              <p class="text-center">{mnemonic()}</p>
            </div>

            <button onClick={generateMnemonic} class="w-full bg-primary btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600">Generate recovery phrase</button>
            <Show when={proceed()}>
            <button onClick={[renderComponent, 'confirm']} class="w-full btn-secondary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600">Continue</button>

            </Show>

            <p class="text-center text-sm mt-2 text-gray-600">Ensure other people cannot peek at your screen. If your recovery phrase is compromised, your assets may be lost forever.</p>

          </div>
        </div>

  </>
}
