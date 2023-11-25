import { onMount, type JSX, createSignal, Show, For } from 'solid-js'
import './styling/Wallet.css'
import * as kaspa_wasm from '../../public/kaspa/kaspa_wasm'
import settings from '../assets/settings.svg'
import save from '../assets/save.svg'
import { createStore } from 'solid-js/store'
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

interface Account {
  address: string
  balance: string
  key: string
  utxos: any[]
}
interface AccountDetail {
  utxos: any[]
  balance: { balance: bigint }
}

export function Wallet (): JSX.Element {
  const mnemonicString: string | null = sessionStorage.getItem('mnemonic')
  if (mnemonicString === null) throw new Error('Could not load wallet')
  const [rpc, setRpc] = createSignal('161.97.134.217:17110')
  const [connected, setConnected] = createSignal(false)
  const [showSettings, setShowSettings] = createSignal(false)
  const [accounts, setAccounts] = createStore<Account[]>([])
  const [balance, setBalance] = createSignal(0.0)
  let kaspa: kaspa_wasm.InitOutput
  let accountIndex: bigint = 1n
  let fetchingBalance = false
  function assertKaspa (): boolean {
    if (kaspa === undefined) return false
    return true
  }

  async function getUTXOForAddress (address: string, index: number): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('IPC communication timeout'))
      }, 10000)

      window.electronAPI.requestUTXO(address, (result: AccountDetail) => {
        clearInterval(timeout)
        const parsedBalance = Number(result.balance.balance).toString()
        const parsedUTXOs = result.utxos
        if (accounts[index].balance !== parsedBalance) {
          const newState = JSON.parse(JSON.stringify(accounts))
          newState[index].balance = parsedBalance
          newState[index].utxos = parsedUTXOs
          setAccounts(newState)
        }
        resolve()
      })
    })
  }

  async function getUTXOForAll (): Promise<void> {
    if (fetchingBalance) return
    fetchingBalance = true
    if (accounts.length > 0) {
      for (let i = 0; i < accounts.length; i++) {
        await getUTXOForAddress(accounts[i].address, i)
      }
    }
    fetchingBalance = false
  }
  setInterval(() => {
    void getUTXOForAll()
  }, 500)

  async function addAccount (): Promise<void> {
    if (!connected()) return
    const mnemonic = new kaspa_wasm.Mnemonic(mnemonicString as string)
    const seed = mnemonic.toSeed('')
    const xPrv = new kaspa_wasm.XPrv(seed)
    const xPrvString = xPrv.intoString('xprv')
    const xPrivateKey = new kaspa_wasm.XPrivateKey(xPrvString, false, accountIndex)
    const prvkey = xPrivateKey.receiveKey(Number(accountIndex))
    const sourceAddress = prvkey.toKeypair().toAddress('mainnet')
    const account: Account = {
      balance: '...',
      address: sourceAddress.toString(),
      key: prvkey.toString(),
      utxos: []
    }
    const newState = JSON.parse(JSON.stringify(accounts))
    newState.push(account)
    accountIndex++
    setAccounts(newState)
  }

  void (async () => {
    kaspa = await kaspa_wasm.default('kaspa/kaspa_wasm_bg.wasm')
  })()

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

          <For each={accounts}>{(account: Account, _i) =>
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:mt-0">
          <div class="w-full flex justify-between truncate items-center">
            <span class="me-3 flex-1 w-0 overflow-x-scroll">
                {account.address}
              </span>
              <span class="me-3 flex-1 w-0 truncate">
              {account.balance} KAS
              </span>
              <button class="bg-primary btn-primary px-1 inline-flex justify-center items-center text-sm font-semibold border border-transparent bg-blue-600">
                Send
              </button>
            </div>
          </li>
          }</For>
        </ul>
      </div>
      <button onClick={[addAccount, '']} class="w-full btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600">Create Address</button>
      <p class="text-xs ml-1 mb-1">Transactions</p>
      <div class="tx-list">
        <ul class="flex flex-col justify-end text-start -space-y-px">
        <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:mt-0">
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
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:mt-0">
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
          <li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:mt-0">
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
  <div class="settings-drawer mt-2 p-3 border border-gray-200 shadow-sm">
    <label for="rpc-input" class="block text-sm font-medium mb-2">RPC Url</label>
    <input value={rpc()} use:model={[rpc, setRpc]} type="text" name="rpc-input" class="w-full py-1 px-2 text-sm"></input>
  </div>
</Show>

      <div class="mt-5">

        <p class="text-center text-sm mt-2 text-gray-600">KaspX, the secure Kaspa Wallet <a target="_blank" href="https://kaspx.io">KaspX.io</a>.</p>

      </div>

    </div>

  </>
}
