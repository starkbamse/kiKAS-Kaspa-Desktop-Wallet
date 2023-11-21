import { type Accessor, type Setter } from 'solid-js'
export interface OpenProps {
  renderComponent: (name: string) => void

}

export interface CreateProps {
  componentState: {
    start: boolean
    create: boolean
    confirm: boolean
  }
  renderComponent: (name: string) => void
  setMnemonic: (mnemonic: string) => void
}

export interface Mnemonic {
  phrase: string
}

export interface ConfirmProps {
  renderComponent: (name: string) => void
  mnemonic: () => string
}
export interface Verification {
  index: number
  value: any
  userInput: Accessor<string>
  setUserInput: Setter<string>
  element: HTMLInputElement | undefined
}
