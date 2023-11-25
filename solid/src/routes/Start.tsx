import { type JSX, Show, createSignal } from 'solid-js'
import Create from './Create'
import { createStore } from 'solid-js/store'
import Confirm from './Confirm'
import { Open } from './Open'
import { Wallet } from './Wallet'
import logo from '../assets/kikas.png'
import './styling/Start.css'
export default function Start (): JSX.Element {
  const [componentState, setComponentState] = createStore({
    start: true,
    create: false,
    confirm: false,
    open: false,
    wallet: false
  })
  const [mnemonic, setMnemonic] = createSignal('')

  function renderComponent (name: string): void {
    console.log('Updating component state')
    const updatedState = JSON.parse(JSON.stringify(componentState))
    for (const key in updatedState) {
      updatedState[key] = false
    }
    console.log(name)
    updatedState[name] = true
    setComponentState(updatedState)
    console.log('New state:')
    console.log(updatedState)
  }

  return <>
      <main class="w-full max-w-md mx-auto">
      <div class="h-full bg-white border border-gray-200 shadow-sm">
      <div>
        <Show when={!componentState.start}>
          <button onClick={[renderComponent, 'start']} class="bg-white ml-2 float-left absolute mb-5 py-1 px-1 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent">Back</button>
        </Show>

            <img class="logo mt-4" src={logo}></img>
      </div>

    <Show
      when={componentState.start}
    >

        <div class="p-4">

          <div>

          <button onClick={[renderComponent, 'open']} class="w-full bg-primary btn-primary mb-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600">Open existing wallet</button>
          <button onClick={[renderComponent, 'create']} class="w-full bg-primary btn-secondary py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600">Add new wallet</button>
          </div>
        </div>

  </Show>
  <Show
      when={componentState.create}
      >
      <Create componentState={componentState} renderComponent={renderComponent} setMnemonic={setMnemonic}/>
    </Show>

    <Show
      when={componentState.confirm}
      >
      <Confirm renderComponent={renderComponent} mnemonic={mnemonic}/>
    </Show>
    <Show
      when={componentState.open}
      >
      <Open renderComponent={renderComponent}/>
    </Show>
    <Show
      when={componentState.wallet}
      >
      <Wallet/>
    </Show>
    </div>
    </main>
    </>
}
