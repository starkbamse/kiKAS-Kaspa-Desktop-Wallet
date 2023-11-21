import { onMount, type JSX, createSignal, Show } from 'solid-js'
import './styling/Wallet.css'
import * as kaspa_wasm from '../../public/kaspa/kaspa_wasm'
import settings from '../assets/settings.svg'
import save from '../assets/save.svg'
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

interface ServerStatus {
  rpcApiVersion: number[]
  serverVersion: string
  networkId: string
  hasUtxoIndex: boolean
  isSynced: boolean
  virtualDaaScore: bigint
}

export function Wallet (): JSX.Element {
  const [rpc, setRpc] = createSignal('161.97.134.217:17110')
  const [connected, setConnected] = createSignal(false)
  const [showSettings, setShowSettings] = createSignal(false)
  function assertKaspa (): boolean {
    if (kaspa === undefined) return false
    return true
  }

  function requestRPCConnection (): void {
    setConnected(false)
    window.electronAPI.requestRPCConnect(rpc(), (result: ServerStatus) => {
      console.log(result)
      setConnected(true)
    })
  }

  function toggleSettings (): void {
    setShowSettings(!showSettings())
    if (!showSettings()) { requestRPCConnection() }
  }

  let kaspa: kaspa_wasm.InitOutput
  void (async () => {
    kaspa = await kaspa_wasm.default('kaspa/kaspa_wasm_bg.wasm')
  })()

  const [balance, setBalance] = createSignal(0.0)

  onMount(() => {
    balance()
    const watchForWASMLoad = setInterval(() => {
      if (assertKaspa()) {
        clearInterval(watchForWASMLoad)
        requestRPCConnection()
      }
    }, 1000)

    setBalance(0.0)
  })
  return <>

    <div class="p-4">
    <p class="text-xs ml-1 mb-1">Addresses</p>
      <div class="wallet-list">
        <ul class="flex flex-col justify-end text-start -space-y-px">
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-none">
          <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 overflow-x-scroll">
                kaspa:qq3k4du6wf2g26j7ds6fqmgtgavgm3zy676wntp2e52nsuns2n4s6xkndmx0y
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                1 KAS
              </span>
              <button class="bg-primary btn-primary px-1 inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600">
                Send
              </button>
            </div>
          </li>
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-none">
          <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 overflow-x-scroll">
                kaspa:qq3k4du6wf2g26j7ds6fqmgtgavgm3zy676wntp2e52nsuns2n4s6xkndmx0y
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                1 KAS
              </span>
              <button class="bg-primary btn-primary px-1 inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600">
                Send
              </button>
            </div>
          </li>
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-none">
          <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 overflow-x-scroll">
                kaspa:qq3k4du6wf2g26j7ds6fqmgtgavgm3zy676wntp2e52nsuns2n4s6xkndmx0y
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                1 KAS
              </span>
              <button class="bg-primary btn-primary px-1 inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600">
                Send
              </button>
            </div>
          </li>
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-none">
          <div class="w-full flex justify-between truncate items-center">
              <span class="me-3 flex-1 w-0 overflow-x-scroll">
                kaspa:qq3k4du6wf2g26j7ds6fqmgtgavgm3zy676wntp2e52nsuns2n4s6xkndmx0y
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                1 KAS
              </span>
              <button class="bg-primary btn-primary px-1 inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600">
                Send
              </button>
            </div>
          </li>
        </ul>
      </div>
      <button class="w-full btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-t-none text-sm font-semibold rounded-lg border border-transparent bg-blue-600">Create Address</button>
      <p class="text-xs ml-1 mb-1">Transactions</p>
      <div class="tx-list">
        <ul class="flex flex-col justify-end text-start -space-y-px">
        <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg last:rounded-b-lg first:mt-0">
            <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 truncate">
               3d 2m
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                +1 KAS
              </span>
              <a class="color-primary px-1 inline-flex justify-center items-center text-sm font-semibold">
                Explorer
              </a>
            </div>
          </li>
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg last:rounded-b-lg first:mt-0">
          <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 truncate">
               3d 2m
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                +1 KAS
              </span>
              <a class="color-primary px-1 inline-flex justify-center items-center text-sm font-semibold">
                Explorer
              </a>
            </div>
          </li>
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg last:rounded-b-lg first:mt-0">
          <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 truncate">
               3d 2m
              </span>
              <span class="me-3 flex-1 w-0 truncate">
                +1 KAS
              </span>
              <a class="color-primary px-1 inline-flex justify-center items-center text-sm font-semibold">
                Explorer
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex flex-row items-end gap-1 justify-end">
    <p>
    <Show when={connected()} fallback={<span class="text-yellow-400 text-xs">Connecting...</span>}>
          <span class="text-green-400 text-xs">Connected</span></Show>
    </p>

    <button onClick={toggleSettings}>
      <Show when={showSettings()} fallback={<img class="settings" src={settings}></img>}>
      <img class="settings" src={save}></img>
      </Show>
    </button>
</div>
<Show when={showSettings()}>
  <div class="settings-drawer mt-2 p-3 border border-gray-200 rounded-xl shadow-sm">
    <label for="rpc-input" class="block text-sm font-medium mb-2">RPC Url</label>
    <input value={rpc()} use:model={[rpc, setRpc]} type="text" name="rpc-input" class="rounded-md w-full py-1 px-2 text-sm"></input>
  </div>
</Show>

      <div class="mt-5">

        <p class="text-center text-sm mt-2 text-gray-600">KaspX, the secure Kaspa Wallet <a target="_blank" href="https://kaspx.io">KaspX.io</a>.</p>

      </div>

    </div>

  </>
}
