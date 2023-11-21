/* tslint:disable */
/* eslint-disable */
/**
* `signTransaction()` is a helper function to sign a transaction using a private key array or a signer array.
* @param {SignableTransaction} mtx
* @param {PrivateKey[]} signer
* @param {boolean} verify_sig
* @returns {SignableTransaction}
*/
export function signTransaction(mtx: SignableTransaction, signer: PrivateKey[], verify_sig: boolean): SignableTransaction;
/**
* @param {any} script_hash
* @param {PrivateKey} privkey
* @returns {string}
*/
export function signScriptHash(script_hash: any, privkey: PrivateKey): string;
/**
* @param {any} thresholds
*/
export function configureUtxoProcessing(thresholds: any): void;
/**
* @param {any} sompi
* @returns {number}
*/
export function sompiToKaspa(sompi: any): number;
/**
* @param {number} kaspa
* @returns {bigint}
*/
export function kaspaToSompi(kaspa: number): bigint;
/**
* @param {any} sompi
* @returns {string}
*/
export function sompiToKaspaString(sompi: any): string;
/**
* @param {any} sompi
* @param {Wallet} wallet
* @returns {string}
*/
export function sompiToKaspaStringWithSuffix(sompi: any, wallet: Wallet): string;
/**
* find Consensus parameters for given Address
* @param {Address} address
* @returns {ConsensusParams}
*/
export function getConsensusParametersByAddress(address: Address): ConsensusParams;
/**
* find Consensus parameters for given NetworkType
* @param {number} network
* @returns {ConsensusParams}
*/
export function getConsensusParametersByNetwork(network: number): ConsensusParams;
/**
* @param {string} key
* @param {number} network_type
* @param {boolean | undefined} ecdsa
* @param {number | undefined} account_kind
* @returns {Address}
*/
export function createAddress(key: string, network_type: number, ecdsa?: boolean, account_kind?: number): Address;
/**
* @param {number} minimum_signatures
* @param {Array} keys
* @param {number} network_type
* @param {boolean | undefined} ecdsa
* @param {number | undefined} account_kind
* @returns {Address}
*/
export function createMultisigAddress(minimum_signatures: number, keys: Array, network_type: number, ecdsa?: boolean, account_kind?: number): Address;
/**
* Create a basic transaction without any mass limit checks.
* @param {any} utxo_entry_source
* @param {any} outputs
* @param {any} change_address
* @param {bigint} priority_fee
* @param {any} payload
* @param {any} sig_op_count
* @param {any} minimum_signatures
* @returns {SignableTransaction}
*/
export function createTransaction(utxo_entry_source: any, outputs: any, change_address: any, priority_fee: bigint, payload: any, sig_op_count: any, minimum_signatures: any): SignableTransaction;
/**
* Creates a set of transactions using transaction [`Generator`].
* @param {PrivateKey[]} settings
* @returns {Promise<object>}
*/
export function createTransactions(settings: PrivateKey[]): Promise<object>;
/**
* Creates a set of transactions using transaction [`Generator`].
* @param {PrivateKey[]} settings
* @returns {Promise<GeneratorSummary>}
*/
export function estimateTransactions(settings: PrivateKey[]): Promise<GeneratorSummary>;
/**
* @param {any} data
* @returns {string}
*/
export function sha256(data: any): string;
/**
* @param {any} data
* @returns {string}
*/
export function sha256d(data: any): string;
/**
* @param {any} data
* @param {number} byte_length
* @returns {string}
*/
export function argon2sha256iv(data: any, byte_length: number): string;
/**
* @param {string} text
* @param {string} password
* @returns {string}
*/
export function encryptXChaCha20Poly1305(text: string, password: string): string;
/**
* @param {string} text
* @param {string} password
* @returns {string}
*/
export function decryptXChaCha20Poly1305(text: string, password: string): string;
/**
* Signs a message with the given private key
* @param {object} value - an object containing { message: String, privateKey: String|PrivateKey }
* @returns {String} the signature, in hex string format
*/
export function signMessage(value: any): string;
/**
* Verifies with a public key the signature of the given message
* @param {object} value - an object containing { message: String, signature: String, publicKey: String|PublicKey }
* @returns {bool} true if the signature can be verified with the given public key and message, false otherwise
*/
export function verifyMessage(value: any): boolean;
/**
* `calculate_difficulty` is based on set_difficulty function: https://github.com/tmrlvi/kaspa-miner/blob/bf361d02a46c580f55f46b5dfa773477634a5753/src/client/stratum.rs#L375
* @param {number} difficulty
* @returns {bigint}
*/
export function calculateDifficulty(difficulty: number): bigint;
/**
* @returns {Promise<void>}
*/
export function test(): Promise<void>;
/**
* Present panic logs to the user
*/
export function presentPanicHookLogs(): void;
/**
* Initialize panic hook in browser mode
*/
export function initBrowserPanicHook(): void;
/**
* Initialize panic hook in console mode
*/
export function initConsolePanicHook(): void;
/**
*r" Deferred promise - an object that has `resolve()` and `reject()`
*r" functions that can be called outside of the promise body.
* @returns {Promise<any>}
*/
export function defer(): Promise<any>;
/**
*
*  Kaspa `Address` version (`PubKey`, `PubKey ECDSA`, `ScriptHash`)
*/
export enum AddressVersion {
/**
* PubKey addresses always have the version byte set to 0
*/
  PubKey = 0,
/**
* PubKey ECDSA addresses always have the version byte set to 1
*/
  PubKeyECDSA = 1,
/**
* ScriptHash addresses always have the version byte set to 8
*/
  ScriptHash = 8,
}
/**
* Supported languages.
*
* Presently only English is specified by the BIP39 standard
*/
export enum Language {
/**
* English is presently the only supported language
*/
  English = 0,
}
/**
*/
export enum NetworkType {
  Mainnet = 0,
  Testnet = 1,
  Devnet = 2,
  Simnet = 3,
}
/**
*/
export enum AccountKind {
  Legacy = 0,
  Bip32 = 1,
  MultiSig = 2,
  Keypair = 3,
  Hardware = 4,
  Resident = 5,
}
/**
* RPC protocol encoding: `Borsh` or `SerdeJson`
*/
export enum Encoding {
  Borsh = 0,
  SerdeJson = 1,
}
/**
*
* Abortable trigger wraps an `Arc<AtomicBool>`, which can be cloned
* to signal task terminating using an atomic bool.
*
* ```
* let abortable = Abortable::default();
* let result = my_task(abortable).await?;
* // ... elsewhere
* abortable.abort();
* ```
*/
export class Abortable {
  free(): void;
/**
*/
  constructor();
/**
* @returns {boolean}
*/
  isAborted(): boolean;
/**
*/
  abort(): void;
/**
*/
  check(): void;
}
/**
*/
export class Aborted {
  free(): void;
}
/**
*/
export class Account {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {any} js_value
* @returns {Account}
*/
  static ctor(js_value: any): Account;
/**
* @param {any} network_type
* @returns {any}
*/
  balanceStrings(network_type: any): any;
/**
* @returns {Promise<Address>}
*/
  deriveReceiveAddress(): Promise<Address>;
/**
* @returns {Promise<Address>}
*/
  deriveChangeAddress(): Promise<Address>;
/**
* @returns {Promise<void>}
*/
  scan(): Promise<void>;
/**
* @param {any} js_value
* @returns {Promise<any>}
*/
  send(js_value: any): Promise<any>;
/**
*/
  readonly balance: any;
/**
*/
  readonly changeAddress: string;
/**
*/
  context: UtxoContext;
/**
*/
  readonly receiveAddress: string;
/**
*/
  readonly type: string;
}
/**
* Kaspa `Address` struct that serializes to and from an address format string: `kaspa:qz0s...t8cv`.
*/
export class Address {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {string} address
*/
  constructor(address: string);
/**
* Convert an address to a string.
* @returns {string}
*/
  toString(): string;
/**
* @param {number} n
* @returns {string}
*/
  short(n: number): string;
/**
*/
  readonly payload: string;
/**
*/
  prefix: string;
/**
*/
  readonly version: string;
}
/**
*/
export class AddressList {
  free(): void;
}
/**
*/
export class AgentConstructorOptions {
  free(): void;
/**
*/
  keep_alive: boolean;
/**
*/
  keep_alive_msecs: number;
/**
*/
  max_free_sockets: number;
/**
*/
  max_sockets: number;
/**
*/
  timeout: number;
}
/**
*/
export class AppendFileOptions {
  free(): void;
/**
* @param {string | undefined} encoding
* @param {number | undefined} mode
* @param {string | undefined} flag
*/
  constructor(encoding?: string, mode?: number, flag?: string);
/**
* @returns {AppendFileOptions}
*/
  static new(): AppendFileOptions;
/**
*/
  encoding?: string;
/**
*/
  flag?: string;
/**
*/
  mode?: number;
}
/**
*/
export class AssertionErrorOptions {
  free(): void;
/**
* @param {string | undefined} message
* @param {any} actual
* @param {any} expected
* @param {string} operator
*/
  constructor(message: string | undefined, actual: any, expected: any, operator: string);
/**
* The actual property on the error instance.
*/
  actual: any;
/**
* The expected property on the error instance.
*/
  expected: any;
/**
* If provided, the error message is set to this value.
*/
  message?: string;
/**
* The operator property on the error instance.
*/
  operator: string;
}
/**
*/
export class AsyncStreamProxy {
  free(): void;
/**
* @returns {Promise<any>}
*/
  next(): Promise<any>;
}
/**
*/
export class Balance {
  free(): void;
/**
* @param {any} network_type
* @returns {BalanceStrings}
*/
  as_strings(network_type: any): BalanceStrings;
/**
*/
  readonly mature: bigint;
/**
*/
  readonly pending: bigint;
}
/**
*/
export class BalanceStrings {
  free(): void;
/**
*/
  readonly mature: any;
/**
*/
  readonly pending: any;
}
/**
*/
export class ConsensusParams {
  free(): void;
}
/**
*/
export class ConsoleConstructorOptions {
  free(): void;
/**
* @param {any} stdout
* @param {any} stderr
* @param {boolean | undefined} ignore_errors
* @param {any} color_mod
* @param {object | undefined} inspect_options
*/
  constructor(stdout: any, stderr: any, ignore_errors: boolean | undefined, color_mod: any, inspect_options?: object);
/**
* @param {any} stdout
* @param {any} stderr
* @returns {ConsoleConstructorOptions}
*/
  static new(stdout: any, stderr: any): ConsoleConstructorOptions;
/**
*/
  color_mod: any;
/**
*/
  ignore_errors?: boolean;
/**
*/
  inspect_options?: object;
/**
*/
  stderr: any;
/**
*/
  stdout: any;
}
/**
*/
export class CreateHookCallbacks {
  free(): void;
/**
* @param {Function} init
* @param {Function} before
* @param {Function} after
* @param {Function} destroy
* @param {Function} promise_resolve
*/
  constructor(init: Function, before: Function, after: Function, destroy: Function, promise_resolve: Function);
/**
*/
  after: Function;
/**
*/
  before: Function;
/**
*/
  destroy: Function;
/**
*/
  init: Function;
/**
*/
  promise_resolve: Function;
}
/**
*/
export class CreateReadStreamOptions {
  free(): void;
/**
* @param {boolean | undefined} auto_close
* @param {boolean | undefined} emit_close
* @param {string | undefined} encoding
* @param {number | undefined} end
* @param {number | undefined} fd
* @param {string | undefined} flags
* @param {number | undefined} high_water_mark
* @param {number | undefined} mode
* @param {number | undefined} start
*/
  constructor(auto_close?: boolean, emit_close?: boolean, encoding?: string, end?: number, fd?: number, flags?: string, high_water_mark?: number, mode?: number, start?: number);
/**
*/
  auto_close?: boolean;
/**
*/
  emit_close?: boolean;
/**
*/
  encoding?: string;
/**
*/
  end?: number;
/**
*/
  fd?: number;
/**
*/
  flags?: string;
/**
*/
  high_water_mark?: number;
/**
*/
  mode?: number;
/**
*/
  start?: number;
}
/**
*/
export class CreateWriteStreamOptions {
  free(): void;
/**
* @param {boolean | undefined} auto_close
* @param {boolean | undefined} emit_close
* @param {string | undefined} encoding
* @param {number | undefined} fd
* @param {string | undefined} flags
* @param {number | undefined} mode
* @param {number | undefined} start
*/
  constructor(auto_close?: boolean, emit_close?: boolean, encoding?: string, fd?: number, flags?: string, mode?: number, start?: number);
/**
*/
  auto_close?: boolean;
/**
*/
  emit_close?: boolean;
/**
*/
  encoding?: string;
/**
*/
  fd?: number;
/**
*/
  flags?: string;
/**
*/
  mode?: number;
/**
*/
  start?: number;
}
/**
*/
export class DerivationPath {
  free(): void;
/**
* @param {string} path
*/
  constructor(path: string);
/**
* Is this derivation path empty? (i.e. the root)
* @returns {boolean}
*/
  isEmpty(): boolean;
/**
* Get the count of [`ChildNumber`] values in this derivation path.
* @returns {number}
*/
  length(): number;
/**
* Get the parent [`DerivationPath`] for the current one.
*
* Returns `Undefined` if this is already the root path.
* @returns {DerivationPath | undefined}
*/
  parent(): DerivationPath | undefined;
/**
* Push a [`ChildNumber`] onto an existing derivation path.
* @param {number} child_number
* @param {boolean | undefined} hardened
*/
  push(child_number: number, hardened?: boolean): void;
/**
* @returns {string}
*/
  toString(): string;
}
/**
*
* [`EventDispatcher`] is an object meant to be used in WASM environment to
* process channel events.
*/
export class EventDispatcher {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  constructor();
/**
* @param {any} callback
*/
  registerListener(callback: any): void;
/**
* `removeListenet` must be called when releasing ReflectorClient
* to stop the background event processing task
*/
  removeListener(): void;
/**
* @returns {Promise<void>}
*/
  stop(): Promise<void>;
/**
*/
  listener: any;
}
/**
*/
export class FormatInputPathObject {
  free(): void;
/**
* @param {string | undefined} base
* @param {string | undefined} dir
* @param {string | undefined} ext
* @param {string | undefined} name
* @param {string | undefined} root
*/
  constructor(base?: string, dir?: string, ext?: string, name?: string, root?: string);
/**
* @returns {FormatInputPathObject}
*/
  static new(): FormatInputPathObject;
/**
*/
  base?: string;
/**
*/
  dir?: string;
/**
*/
  ext?: string;
/**
*/
  name?: string;
/**
*/
  root?: string;
}
/**
* [`Generator`] is a type capable of generating transactions based on a supplied
* set of UTXO entries or a UTXO entry producer (such as `UtxoContext`). The [`Generator`]
* accumulates UTXO entries until it can generate a transaction that meets the
* requested amount or until the total mass of created inputs exceeds the allowed
* transaction mass, at which point it will produce a compound transaction by forwarding
* all selected UTXO entries to the supplied change address and prepare to start generating
* a new transaction.  Such sequence of daisy-chained transactions is known as a "batch".
* Each compount transaction results in a new UTXO, which is immediately reused in the
* subsequent transaction.
*
* ```javascript
*
* let generator = new Generator({
*     utxoEntries : [...],
*     changeAddress : "kaspa:...",
*     outputs : [[1000, "kaspa:..."], [2000, "kaspa:..."], ...],
*     priorityFee : 1000n,
* });
*
* while(transaction = await generator.next()) {
*     await transaction.sign(privateKeys);
*     await transaction.submit(rpc);
* }
*
* let summary = generator.summary();
* console.log(summary);
*
* ```
*/
export class Generator {
  free(): void;
/**
* @param {PrivateKey[]} args
*/
  constructor(args: PrivateKey[]);
/**
* Generate next transaction
* @returns {Promise<any>}
*/
  next(): Promise<any>;
/**
* @returns {Promise<GeneratorSummary>}
*/
  estimate(): Promise<GeneratorSummary>;
/**
* @returns {GeneratorSummary}
*/
  summary(): GeneratorSummary;
}
/**
*/
export class GeneratorSummary {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly fees: bigint;
/**
*/
  readonly finalAmount: bigint | undefined;
/**
*/
  readonly finalTransactionId: string | undefined;
/**
*/
  readonly networkType: number;
/**
*/
  readonly transactions: number;
/**
*/
  readonly utxos: number;
}
/**
*/
export class GetNameOptions {
  free(): void;
/**
* @param {number | undefined} family
* @param {string} host
* @param {string} local_address
* @param {number} port
* @returns {GetNameOptions}
*/
  static new(family: number | undefined, host: string, local_address: string, port: number): GetNameOptions;
/**
*/
  family?: number;
/**
*/
  host: string;
/**
*/
  local_address: string;
/**
*/
  port: number;
}
/**
*/
export class Hash {
  free(): void;
/**
* @param {string} hex_str
*/
  constructor(hex_str: string);
/**
* @returns {string}
*/
  toString(): string;
}
/**
*/
export class Header {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Finalizes the header and recomputes (updates) the header hash
* @return { String } header hash
* @returns {string}
*/
  finalize(): string;
/**
* @param {any} js_value
*/
  constructor(js_value: any);
/**
* Obtain `JSON` representation of the header. JSON representation
* should be obtained using WASM, to ensure proper serialization of
* big integers.
* @returns {string}
*/
  asJSON(): string;
/**
* @returns {string}
*/
  getBlueWorkAsHex(): string;
/**
*/
  acceptedIdMerkleRoot: any;
/**
*/
  bits: number;
/**
*/
  blueScore: bigint;
/**
*/
  blueWork: any;
/**
*/
  daaScore: bigint;
/**
*/
  readonly hash: string;
/**
*/
  hashMerkleRoot: any;
/**
*/
  nonce: bigint;
/**
*/
  parentsByLevel: any;
/**
*/
  pruningPoint: any;
/**
*/
  timestamp: bigint;
/**
*/
  utxoCommitment: any;
/**
*/
  version: number;
}
/**
* Data structure that contains a secret and public keys.
*/
export class Keypair {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Get the [`Address`] of this Keypair's [`PublicKey`].
* Receives a [`NetworkType`] to determine the prefix of the address.
* JavaScript: `let address = keypair.toAddress(NetworkType.MAINNET);`.
* @param {NetworkType | NetworkId | string} network
* @returns {Address}
*/
  toAddress(network: NetworkType | NetworkId | string): Address;
/**
* Get `ECDSA` [`Address`] of this Keypair's [`PublicKey`].
* Receives a [`NetworkType`] to determine the prefix of the address.
* JavaScript: `let address = keypair.toAddress(NetworkType.MAINNET);`.
* @param {NetworkType | NetworkId | string} network
* @returns {Address}
*/
  toAddressECDSA(network: NetworkType | NetworkId | string): Address;
/**
* Create a new random [`Keypair`].
* JavaScript: `let keypair = Keypair::random();`.
* @returns {Keypair}
*/
  static random(): Keypair;
/**
* Create a new [`Keypair`] from a [`PrivateKey`].
* JavaScript: `let privkey = new PrivateKey(hexString); let keypair = privkey.toKeypair();`.
* @param {PrivateKey} secret_key
* @returns {Keypair}
*/
  static fromPrivateKey(secret_key: PrivateKey): Keypair;
/**
* Get the [`PrivateKey`] of this [`Keypair`].
*/
  readonly privateKey: PrivateKey;
/**
* Get the [`PublicKey`] of this [`Keypair`].
*/
  readonly publicKey: any;
/**
* Get the `XOnlyPublicKey` of this [`Keypair`].
*/
  readonly xOnlyPublicKey: any;
}
/**
*/
export class MassCalculator {
  free(): void;
/**
* @param {ConsensusParams} cp
*/
  constructor(cp: ConsensusParams);
/**
* @param {bigint} amount
* @returns {boolean}
*/
  static isStandardOutputAmountDust(amount: bigint): boolean;
/**
* `isTransactionOutputDust()` returns whether or not the passed transaction output
* amount is considered dust or not based on the configured minimum transaction
* relay fee.
*
* Dust is defined in terms of the minimum transaction relay fee. In particular,
* if the cost to the network to spend coins is more than 1/3 of the minimum
* transaction relay fee, it is considered dust.
*
* It is exposed by [MiningManager] for use by transaction generators and wallets.
* @param {any} transaction_output
* @returns {boolean}
*/
  static isTransactionOutputDust(transaction_output: any): boolean;
/**
* `minimumRelayTransactionFee()` specifies the minimum transaction fee for a transaction to be accepted to
* the mempool and relayed. It is specified in sompi per 1kg (or 1000 grams) of transaction mass.
*
* `pub(crate) const MINIMUM_RELAY_TRANSACTION_FEE: u64 = 1000;`
* @returns {number}
*/
  static minimumRelayTransactionFee(): number;
/**
* `maximumStandardTransactionMass()` is the maximum mass allowed for transactions that
* are considered standard and will therefore be relayed and considered for mining.
*
* `pub const MAXIMUM_STANDARD_TRANSACTION_MASS: u64 = 100_000;`
* @returns {number}
*/
  static maximumStandardTransactionMass(): number;
/**
* minimum_required_transaction_relay_fee returns the minimum transaction fee required
* for a transaction with the passed mass to be accepted into the mempool and relayed.
* @param {number} mass
* @returns {number}
*/
  static minimumRequiredTransactionRelayFee(mass: number): number;
/**
* @param {any} tx
* @returns {number}
*/
  calcMassForTransaction(tx: any): number;
/**
* @returns {number}
*/
  static blankTransactionSerializedByteSize(): number;
/**
* @returns {number}
*/
  blankTransactionMass(): number;
/**
* @param {number} payload_byte_size
* @returns {number}
*/
  calcMassForPayload(payload_byte_size: number): number;
/**
* @param {any} outputs
* @returns {number}
*/
  calcMassForOutputs(outputs: any): number;
/**
* @param {any} inputs
* @returns {number}
*/
  calcMassForInputs(inputs: any): number;
/**
* @param {TransactionOutput} output
* @returns {number}
*/
  calcMassForOutput(output: TransactionOutput): number;
/**
* @param {TransactionInput} input
* @returns {number}
*/
  calcMassForInput(input: TransactionInput): number;
/**
* @param {number} minimum_signatures
* @returns {number}
*/
  calcSignatureMass(minimum_signatures: number): number;
/**
* @param {number} number_of_inputs
* @param {number} minimum_signatures
* @returns {number}
*/
  calcSignatureMassForInputs(number_of_inputs: number, minimum_signatures: number): number;
/**
* @param {bigint} mass
* @returns {number}
*/
  calcMinimumTransactionRelayFeeFromMass(mass: bigint): number;
/**
* @param {Transaction} transaction
* @param {number} minimum_signatures
* @returns {number}
*/
  calcMiniumTxRelayFee(transaction: Transaction, minimum_signatures: number): number;
}
/**
*/
export class MkdtempSyncOptions {
  free(): void;
/**
* @param {string | undefined} encoding
*/
  constructor(encoding?: string);
/**
* @returns {MkdtempSyncOptions}
*/
  static new(): MkdtempSyncOptions;
/**
*/
  encoding?: string;
}
/**
* BIP39 mnemonic phrases: sequences of words representing cryptographic keys.
*/
export class Mnemonic {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {string} phrase
* @param {number | undefined} language
*/
  constructor(phrase: string, language?: number);
/**
* @returns {Mnemonic}
*/
  static random(): Mnemonic;
/**
* @param {string | undefined} password
* @returns {string}
*/
  toSeed(password?: string): string;
/**
*/
  entropy: string;
/**
*/
  phrase: string;
}
/**
*/
export class NetServerOptions {
  free(): void;
/**
*/
  allow_half_open?: boolean;
/**
*/
  pause_on_connect?: boolean;
}
/**
*/
export class NetworkId {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {any} value
*/
  constructor(value: any);
/**
* @returns {string}
*/
  toString(): string;
/**
* @returns {string}
*/
  addressPrefix(): string;
/**
*/
  readonly id: string;
/**
*/
  suffix?: number;
/**
*/
  type: number;
}
/**
*/
export class PaymentOutput {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {Address} address
* @param {bigint} amount
*/
  constructor(address: Address, amount: bigint);
/**
*/
  address: Address;
/**
*/
  amount: bigint;
}
/**
*/
export class PaymentOutputs {
  free(): void;
/**
* @param {any} output_array
*/
  constructor(output_array: any);
}
/**
*/
export class PendingTransaction {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {Array<any>}
*/
  getUtxoEntries(): Array<any>;
/**
* Sign transaction with supplied [`Array`] or [`PrivateKey`] or an array of
* raw private key bytes (encoded as [`Uint8Array`] or as hex strings)
* @param {any} js_value
*/
  sign(js_value: any): void;
/**
* Submit transaction to the supplied [`RpcClient`]
* @param {RpcClient} wasm_rpc_client
* @returns {Promise<string>}
*/
  submit(wasm_rpc_client: RpcClient): Promise<string>;
/**
*/
  readonly addresses: Array<any>;
/**
*/
  readonly aggregateInputAmount: bigint;
/**
*/
  readonly aggregateOutputAmount: bigint;
/**
*/
  readonly changeAmount: bigint;
/**
*/
  readonly feeAmount: bigint;
/**
*/
  readonly id: string;
/**
*/
  readonly paymentAmount: any;
/**
* Returns encapsulated network [`Transaction`]
*/
  readonly transaction: Transaction;
/**
*/
  readonly type: string;
}
/**
*/
export class PipeOptions {
  free(): void;
/**
* @param {boolean | undefined} end
*/
  constructor(end?: boolean);
/**
*/
  end?: boolean;
}
/**
* Data structure that envelops a Private Key
*/
export class PrivateKey {
  free(): void;
/**
* Create a new [`PrivateKey`] from a hex-encoded string.
* @param {string} key
*/
  constructor(key: string);
/**
* Returns the [`PrivateKey`] key encoded as a hex string.
* @returns {string}
*/
  toString(): string;
/**
* Generate a [`Keypair`] from this [`PrivateKey`].
* @returns {Keypair}
*/
  toKeypair(): Keypair;
}
/**
*/
export class ProcessSendOptions {
  free(): void;
/**
* @param {boolean | undefined} swallow_errors
*/
  constructor(swallow_errors?: boolean);
/**
*/
  swallow_errors?: boolean;
}
/**
*/
export class PrvKeyDataInfo {
  free(): void;
/**
* @param {string} _name
*/
  setName(_name: string): void;
/**
*/
  readonly id: string;
/**
*/
  readonly isEncrypted: any;
/**
*/
  readonly name: any;
}
/**
*/
export class PubkeyDerivationManager {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly publicKey: string;
}
/**
*/
export class PubkeyDerivationManagerV0 {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly publicKey: string;
}
/**
*/
export class PublicKey {
  free(): void;
/**
* Create a new [`PublicKey`] from a hex-encoded string.
* @param {string} key
*/
  constructor(key: string);
/**
* @returns {string}
*/
  toString(): string;
/**
* Get the [`Address`] of this PublicKey.
* Receives a [`NetworkType`] to determine the prefix of the address.
* JavaScript: `let address = keypair.toAddress(NetworkType.MAINNET);`.
* @param {NetworkType | NetworkId | string} network
* @returns {Address}
*/
  toAddress(network: NetworkType | NetworkId | string): Address;
/**
* Get `ECDSA` [`Address`] of this PublicKey.
* Receives a [`NetworkType`] to determine the prefix of the address.
* JavaScript: `let address = keypair.toAddress(NetworkType.MAINNET);`.
* @param {NetworkType | NetworkId | string} network
* @returns {Address}
*/
  toAddressECDSA(network: NetworkType | NetworkId | string): Address;
}
/**
* Kaspa RPC client
*/
export class RpcClient {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Create a new RPC client with [`Encoding`] and a `url`.
* @param {string} url
* @param {number} encoding
* @param {NetworkType | NetworkId | string | undefined} network_type
*/
  constructor(url: string, encoding: number, network_type?: NetworkType | NetworkId | string);
/**
* Connect to the Kaspa RPC server. This function starts a background
* task that connects and reconnects to the server if the connection
* is terminated.  Use [`disconnect()`] to terminate the connection.
* @param {any} args
* @returns {Promise<void>}
*/
  connect(args: any): Promise<void>;
/**
* Disconnect from the Kaspa RPC server.
* @returns {Promise<void>}
*/
  disconnect(): Promise<void>;
/**
* Register a notification callback.
* @param {any} callback
* @returns {Promise<void>}
*/
  notify(callback: any): Promise<void>;
/**
* @param {number} encoding
* @param {NetworkType | NetworkId | string} network
* @returns {number}
*/
  static defaultPort(encoding: number, network: NetworkType | NetworkId | string): number;
/**
* Constructs an WebSocket RPC URL given the partial URL or an IP, RPC encoding
* and a network type.
*
* # Arguments
*
* * `url` - Partial URL or an IP address
* * `encoding` - RPC encoding
* * `network_type` - Network type
* @param {string} url
* @param {number} encoding
* @param {NetworkType | NetworkId | string} network
* @returns {string}
*/
  static parseUrl(url: string, encoding: number, network: NetworkType | NetworkId | string): string;
/**
* Subscription to DAA Score
* @returns {Promise<void>}
*/
  subscribeDaaScore(): Promise<void>;
/**
* Unsubscribe from DAA Score
* @returns {Promise<void>}
*/
  unsubscribeDaaScore(): Promise<void>;
/**
* Subscription to UTXOs Changed notifications
* @param {any} addresses
* @returns {Promise<void>}
*/
  subscribeUtxosChanged(addresses: any): Promise<void>;
/**
* Unsubscribe from DAA Score (test)
* @param {any} addresses
* @returns {Promise<void>}
*/
  unsubscribeUtxosChanged(addresses: any): Promise<void>;
/**
* @param {boolean} include_accepted_transaction_ids
* @returns {Promise<void>}
*/
  subscribeVirtualChainChanged(include_accepted_transaction_ids: boolean): Promise<void>;
/**
* @param {boolean} include_accepted_transaction_ids
* @returns {Promise<void>}
*/
  unsubscribeVirtualChainChanged(include_accepted_transaction_ids: boolean): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribeBlockAdded(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribeBlockAdded(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribeFinalityConflict(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribeFinalityConflict(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribeFinalityConflictResolved(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribeFinalityConflictResolved(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribeSinkBlueScoreChanged(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribeSinkBlueScoreChanged(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribeVirtualDaaScoreChanged(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribeVirtualDaaScoreChanged(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribePruningPointUtxoSetOverride(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribePruningPointUtxoSetOverride(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  subscribeNewBlockTemplate(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  unsubscribeNewBlockTemplate(): Promise<void>;
/**
* @returns {Promise<any>}
*/
  getBlockCount(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getBlockDagInfo(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getCoinSupply(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getConnectedPeerInfo(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getInfo(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getPeerAddresses(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getMetrics(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getSink(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getSinkBlueScore(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  ping(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  shutdown(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getServerInfo(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  getSyncStatus(): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  addPeer(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  ban(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  estimateNetworkHashesPerSecond(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getBalanceByAddress(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getBalancesByAddresses(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getBlock(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getBlocks(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getBlockTemplate(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getCurrentNetwork(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getHeaders(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getMempoolEntries(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getMempoolEntriesByAddresses(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getMempoolEntry(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getSubnetwork(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getVirtualChainFromBlock(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  resolveFinalityConflict(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  submitBlock(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  unban(request: any): Promise<any>;
/**
* @param {any} js_value
* @param {boolean | undefined} allow_orphan
* @returns {Promise<any>}
*/
  submitTransaction(js_value: any, allow_orphan?: boolean): Promise<any>;
/**
* This call accepts an `Array` of `Address` or an Array of address strings.
* @param {any} request
* @returns {Promise<any>}
*/
  getUtxosByAddresses(request: any): Promise<any>;
/**
* @param {any} request
* @returns {Promise<any>}
*/
  getUtxosByAddressesCall(request: any): Promise<any>;
/**
*/
  readonly open: boolean;
/**
*/
  readonly url: string;
}
/**
*
*  ScriptBuilder provides a facility for building custom scripts. It allows
* you to push opcodes, ints, and data while respecting canonical encoding. In
* general it does not ensure the script will execute correctly, however any
* data pushes which would exceed the maximum allowed script engine limits and
* are therefore guaranteed not to execute will not be pushed and will result in
* the Script function returning an error.
*/
export class ScriptBuilder {
  free(): void;
/**
* Get script bytes represented by a hex string.
* @returns {string}
*/
  script(): string;
/**
* Drains (empties) the script builder, returning the
* script bytes represented by a hex string.
* @returns {string}
*/
  drain(): string;
/**
* Pushes the passed opcode to the end of the script. The script will not
* be modified if pushing the opcode would cause the script to exceed the
* maximum allowed script engine size.
* @param {number} opcode
* @returns {ScriptBuilder}
*/
  addOp(opcode: number): ScriptBuilder;
/**
* @param {any} opcodes
* @returns {ScriptBuilder}
*/
  addOps(opcodes: any): ScriptBuilder;
/**
* AddData pushes the passed data to the end of the script. It automatically
* chooses canonical opcodes depending on the length of the data.
*
* A zero length buffer will lead to a push of empty data onto the stack (Op0 = OpFalse)
* and any push of data greater than [`MAX_SCRIPT_ELEMENT_SIZE`] will not modify
* the script since that is not allowed by the script engine.
*
* Also, the script will not be modified if pushing the data would cause the script to
* exceed the maximum allowed script engine size [`MAX_SCRIPTS_SIZE`].
* @param {any} data
* @returns {ScriptBuilder}
*/
  addData(data: any): ScriptBuilder;
/**
* @param {bigint} val
* @returns {ScriptBuilder}
*/
  addI64(val: bigint): ScriptBuilder;
/**
* @param {bigint} lock_time
* @returns {ScriptBuilder}
*/
  addLockTime(lock_time: bigint): ScriptBuilder;
/**
* @param {bigint} sequence
* @returns {ScriptBuilder}
*/
  addSequence(sequence: bigint): ScriptBuilder;
}
/**
* Represents a Kaspad ScriptPublicKey
*/
export class ScriptPublicKey {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {number} version
* @param {any} script
*/
  constructor(version: number, script: any);
/**
*/
  readonly script: string;
/**
*/
  version: number;
}
/**
*/
export class SetAadOptions {
  free(): void;
/**
* @param {Function} flush
* @param {number} plaintext_length
* @param {Function} transform
*/
  constructor(flush: Function, plaintext_length: number, transform: Function);
/**
*/
  flush: Function;
/**
*/
  readonly plaintextLength: number;
/**
*/
  plaintext_length: number;
/**
*/
  transform: Function;
}
/**
* Represents a generic mutable transaction
*/
export class SignableTransaction {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {Transaction} tx
* @param {UtxoEntries} entries
*/
  constructor(tx: Transaction, entries: UtxoEntries);
/**
* @returns {string}
*/
  toJSON(): string;
/**
* @param {string} json
* @returns {SignableTransaction}
*/
  static fromJSON(json: string): SignableTransaction;
/**
* @returns {any}
*/
  getScriptHashes(): any;
/**
* @param {Array<any>} signatures
* @returns {any}
*/
  setSignatures(signatures: Array<any>): any;
/**
* UTXO entry data
*/
  entries: UtxoEntries;
/**
*/
  readonly inputs: Array<any>;
/**
*/
  readonly outputs: Array<any>;
/**
*/
  readonly tx: Transaction;
}
/**
*/
export class State {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {Header} header
*/
  constructor(header: Header);
/**
* @param {any} nonce_jsv
* @returns {Array<any>}
*/
  checkPow(nonce_jsv: any): Array<any>;
/**
*/
  readonly prePowHash: string;
/**
*/
  readonly target: bigint;
}
/**
* Wallet file storage interface
*/
export class Storage {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  readonly filename: string;
}
/**
*/
export class StreamTransformOptions {
  free(): void;
/**
* @param {Function} flush
* @param {Function} transform
*/
  constructor(flush: Function, transform: Function);
/**
*/
  flush: Function;
/**
*/
  transform: Function;
}
/**
* Represents a Kaspa transaction
*/
export class Transaction {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Determines whether or not a transaction is a coinbase transaction. A coinbase
* transaction is a special transaction created by miners that distributes fees and block subsidy
* to the previous blocks' miners, and specifies the script_pub_key that will be used to pay the current
* miner in future blocks.
* @returns {boolean}
*/
  is_coinbase(): boolean;
/**
* Recompute and finalize the tx id based on updated tx fields
* @returns {Hash}
*/
  finalize(): Hash;
/**
* @param {any} js_value
*/
  constructor(js_value: any);
/**
*/
  gas: bigint;
/**
* Returns the transaction ID
*/
  readonly id: string;
/**
*/
  inputs: any;
/**
*/
  lock_time: bigint;
/**
*/
  outputs: any;
/**
*/
  payload: any;
/**
*/
  subnetworkId: any;
/**
*/
  version: number;
}
/**
* Represents a Kaspa transaction input
*/
export class TransactionInput {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {any} js_value
*/
  constructor(js_value: any);
/**
*/
  previousOutpoint: any;
/**
*/
  sequence: bigint;
/**
*/
  sigOpCount: number;
/**
*/
  signatureScript: any;
}
/**
* Represents a Kaspa transaction outpoint.
* NOTE: This struct is immutable - to create a custom outpoint
* use the `TransactionOutpoint::new` constructor. (in JavaScript
* use `new TransactionOutpoint(transactionId, index)`).
*/
export class TransactionOutpoint {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {Hash} transaction_id
* @param {number} index
*/
  constructor(transaction_id: Hash, index: number);
/**
* @returns {string}
*/
  getId(): string;
/**
*/
  readonly index: number;
/**
*/
  readonly transactionId: string;
}
/**
* Represents a Kaspad transaction output
*/
export class TransactionOutput {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* TransactionOutput constructor
* @param {bigint} value
* @param {ScriptPublicKey} script_public_key
*/
  constructor(value: bigint, script_public_key: ScriptPublicKey);
/**
*/
  scriptPublicKey: ScriptPublicKey;
/**
*/
  value: bigint;
}
/**
*/
export class TransactionOutputInner {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  scriptPublicKey: ScriptPublicKey;
/**
*/
  value: bigint;
}
/**
* Holds details about an individual transaction output in a utxo
* set such as whether or not it was contained in a coinbase tx, the daa
* score of the block that accepts the tx, its public key script, and how
* much it pays.
*/
export class TxUtxoEntry {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  amount: bigint;
/**
*/
  blockDaaScore: bigint;
/**
*/
  isCoinbase: boolean;
/**
*/
  scriptPublicKey: ScriptPublicKey;
}
/**
*/
export class UserInfoOptions {
  free(): void;
/**
* @param {string | undefined} encoding
*/
  constructor(encoding?: string);
/**
* @returns {UserInfoOptions}
*/
  static new(): UserInfoOptions;
/**
*/
  encoding?: string;
}
/**
*/
export class UtxoContext {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {any} js_value
*/
  constructor(js_value: any);
/**
* Performs a scan of the given addresses and registers them in the context for event notifications.
* @param {any} addresses
* @param {any} optional_current_daa_score
* @returns {Promise<void>}
*/
  trackAddresses(addresses: any, optional_current_daa_score: any): Promise<void>;
/**
* Unregister a list of addresses from the context. This will stop tracking of these addresses.
* @param {any} addresses
* @returns {Promise<void>}
*/
  unregisterAddresses(addresses: any): Promise<void>;
/**
* Clear the UtxoContext.  Unregisters all addresses and clears all UTXO entries.
* @returns {Promise<void>}
*/
  clear(): Promise<void>;
/**
* Returns the mature UTXO entries that are currently in the context.
* @returns {Array<any>}
*/
  mature(): Array<any>;
/**
* Returns the mature UTXO entries that are currently in the context.
* @returns {Array<any>}
*/
  pending(): Array<any>;
/**
* @returns {Promise<Balance>}
*/
  updateBalance(): Promise<Balance>;
/**
*/
  readonly balance: any;
}
/**
* A simple collection of UTXO entries. This struct is used to
* retain a set of UTXO entries in the WASM memory for faster
* processing. This struct keeps a list of entries represented
* by `UtxoEntryReference` struct. This data structure is used
* internally by the framework, but is exposed for convenience.
* Please consider using `UtxoContect` instead.
*/
export class UtxoEntries {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Create a new `UtxoEntries` struct with a set of entries.
* @param {any} js_value
*/
  constructor(js_value: any);
/**
* Sort the contained entries by amount. Please note that
* this function is not intended for use with large UTXO sets
* as it duplicates the whole contained UTXO set while sorting.
*/
  sort(): void;
/**
* @returns {bigint}
*/
  amount(): bigint;
/**
*/
  items: any;
}
/**
*/
export class UtxoEntry {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
*/
  address?: Address;
/**
*/
  entry: TxUtxoEntry;
/**
*/
  outpoint: TransactionOutpoint;
}
/**
*/
export class UtxoEntryReference {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {string}
*/
  getTransactionId(): string;
/**
* @returns {string}
*/
  getId(): string;
/**
*/
  readonly amount: bigint;
/**
*/
  readonly blockDaaScore: bigint;
/**
*/
  readonly entry: UtxoEntry;
/**
*/
  readonly isCoinbase: boolean;
}
/**
*/
export class UtxoProcessor {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {any} js_value
*/
  constructor(js_value: any);
/**
* @returns {Promise<void>}
*/
  shutdown(): Promise<void>;
/**
*/
  events: EventDispatcher;
/**
*/
  rpc: RpcClient;
}
/**
*/
export class Wallet {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {any} js_value
*/
  constructor(js_value: any);
/**
* @returns {Promise<any>}
*/
  keys(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  accounts(): Promise<any>;
/**
* @param {any} prv_key_data_id_filter
* @returns {Promise<any>}
*/
  accountIterator(prv_key_data_id_filter: any): Promise<any>;
/**
* @returns {boolean}
*/
  isOpen(): boolean;
/**
* @returns {boolean}
*/
  isSynced(): boolean;
/**
* @returns {any}
*/
  descriptor(): any;
/**
* @param {any} name
* @returns {Promise<boolean>}
*/
  exists(name: any): Promise<boolean>;
/**
* @param {any} wallet_args
* @returns {Promise<string>}
*/
  createWallet(wallet_args: any): Promise<string>;
/**
* @param {any} args
* @returns {Promise<object>}
*/
  createPrvKeyData(args: any): Promise<object>;
/**
* @param {string} prv_key_data_id
* @param {any} account_args
* @returns {Promise<any>}
*/
  createAccount(prv_key_data_id: string, account_args: any): Promise<any>;
/**
* @returns {Promise<boolean>}
*/
  ping(): Promise<boolean>;
/**
* @returns {Promise<void>}
*/
  start(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  stop(): Promise<void>;
/**
* @param {any} args
* @returns {Promise<void>}
*/
  connect(args: any): Promise<void>;
/**
* @returns {Promise<void>}
*/
  disconnect(): Promise<void>;
/**
*/
  events: EventDispatcher;
/**
*/
  rpc: RpcClient;
}
/**
*/
export class WasiOptions {
  free(): void;
/**
* @param {any[] | undefined} args
* @param {object | undefined} env
* @param {object} preopens
*/
  constructor(args: any[] | undefined, env: object | undefined, preopens: object);
/**
* @param {object} preopens
* @returns {WasiOptions}
*/
  static new(preopens: object): WasiOptions;
/**
*/
  args?: any[];
/**
*/
  env?: object;
/**
*/
  preopens: object;
}
/**
*/
export class WriteFileSyncOptions {
  free(): void;
/**
* @param {string | undefined} encoding
* @param {string | undefined} flag
* @param {number | undefined} mode
*/
  constructor(encoding?: string, flag?: string, mode?: number);
/**
*/
  encoding?: string;
/**
*/
  flag?: string;
/**
*/
  mode?: number;
}
/**
*/
export class XPrivateKey {
  free(): void;
/**
* @param {string} xprv
* @param {boolean} is_multisig
* @param {bigint} account_index
* @param {number | undefined} cosigner_index
*/
  constructor(xprv: string, is_multisig: boolean, account_index: bigint, cosigner_index?: number);
/**
* @param {number} index
* @returns {PrivateKey}
*/
  receiveKey(index: number): PrivateKey;
/**
* @param {number} index
* @returns {PrivateKey}
*/
  changeKey(index: number): PrivateKey;
}
/**
*/
export class XPrv {
  free(): void;
/**
* @param {string} seed
*/
  constructor(seed: string);
/**
* @param {number} chile_number
* @param {boolean | undefined} hardened
* @returns {XPrv}
*/
  deriveChild(chile_number: number, hardened?: boolean): XPrv;
/**
* @param {any} path
* @returns {XPrv}
*/
  derivePath(path: any): XPrv;
/**
* @param {string} prefix
* @returns {string}
*/
  intoString(prefix: string): string;
/**
* @returns {XPub}
*/
  publicKey(): XPub;
}
/**
*/
export class XPub {
  free(): void;
/**
* @param {string} xpub
*/
  constructor(xpub: string);
/**
* @param {number} chile_number
* @param {boolean | undefined} hardened
* @returns {XPub}
*/
  deriveChild(chile_number: number, hardened?: boolean): XPub;
/**
* @param {any} path
* @returns {XPub}
*/
  derivePath(path: any): XPub;
/**
* @param {string} prefix
* @returns {string}
*/
  intoString(prefix: string): string;
}
/**
*/
export class XPublicKey {
  free(): void;
/**
* @param {string} kpub
* @param {number | undefined} cosigner_index
* @returns {Promise<XPublicKey>}
*/
  static fromXPub(kpub: string, cosigner_index?: number): Promise<XPublicKey>;
/**
* @param {string} xprv
* @param {boolean} is_multisig
* @param {bigint} account_index
* @param {number | undefined} cosigner_index
* @returns {Promise<XPublicKey>}
*/
  static fromMasterXPrv(xprv: string, is_multisig: boolean, account_index: bigint, cosigner_index?: number): Promise<XPublicKey>;
/**
* @param {number} start
* @param {number} end
* @returns {Promise<any>}
*/
  receivePubkeys(start: number, end: number): Promise<any>;
/**
* @param {number} start
* @param {number} end
* @returns {Promise<any>}
*/
  changePubkeys(start: number, end: number): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_address_free: (a: number) => void;
  readonly address_constructor: (a: number, b: number) => number;
  readonly address_toString: (a: number, b: number) => void;
  readonly address_version: (a: number, b: number) => void;
  readonly address_prefix: (a: number, b: number) => void;
  readonly address_set_prefix: (a: number, b: number, c: number) => void;
  readonly address_payload: (a: number, b: number) => void;
  readonly address_short: (a: number, b: number, c: number) => void;
  readonly __wbg_addresslist_free: (a: number) => void;
  readonly __wbg_mnemonic_free: (a: number) => void;
  readonly mnemonic_constructor: (a: number, b: number, c: number, d: number) => void;
  readonly mnemonic_entropy: (a: number, b: number) => void;
  readonly mnemonic_set_entropy: (a: number, b: number, c: number) => void;
  readonly mnemonic_random: (a: number) => void;
  readonly mnemonic_phrase: (a: number, b: number) => void;
  readonly mnemonic_set_phrase: (a: number, b: number, c: number) => void;
  readonly mnemonic_toSeed: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_xprv_free: (a: number) => void;
  readonly xprv_new: (a: number, b: number, c: number) => void;
  readonly xprv_deriveChild: (a: number, b: number, c: number, d: number) => void;
  readonly xprv_derivePath: (a: number, b: number, c: number) => void;
  readonly xprv_intoString: (a: number, b: number, c: number, d: number) => void;
  readonly xprv_publicKey: (a: number, b: number) => void;
  readonly __wbg_derivationpath_free: (a: number) => void;
  readonly derivationpath_new: (a: number, b: number, c: number) => void;
  readonly derivationpath_isEmpty: (a: number) => number;
  readonly derivationpath_length: (a: number) => number;
  readonly derivationpath_parent: (a: number) => number;
  readonly derivationpath_push: (a: number, b: number, c: number, d: number) => void;
  readonly derivationpath_toString: (a: number, b: number) => void;
  readonly __wbg_xpub_free: (a: number) => void;
  readonly xpub_new: (a: number, b: number, c: number) => void;
  readonly xpub_deriveChild: (a: number, b: number, c: number, d: number) => void;
  readonly xpub_derivePath: (a: number, b: number, c: number) => void;
  readonly xpub_intoString: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_header_free: (a: number) => void;
  readonly __wbg_get_header_version: (a: number) => number;
  readonly __wbg_set_header_version: (a: number, b: number) => void;
  readonly __wbg_get_header_timestamp: (a: number) => number;
  readonly __wbg_set_header_timestamp: (a: number, b: number) => void;
  readonly __wbg_get_header_bits: (a: number) => number;
  readonly __wbg_set_header_bits: (a: number, b: number) => void;
  readonly __wbg_get_header_nonce: (a: number) => number;
  readonly __wbg_set_header_nonce: (a: number, b: number) => void;
  readonly __wbg_get_header_daaScore: (a: number) => number;
  readonly __wbg_set_header_daaScore: (a: number, b: number) => void;
  readonly __wbg_get_header_blueScore: (a: number) => number;
  readonly __wbg_set_header_blueScore: (a: number, b: number) => void;
  readonly header_finalize: (a: number, b: number) => void;
  readonly header_constructor: (a: number, b: number) => void;
  readonly header_asJSON: (a: number, b: number) => void;
  readonly header_get_hash_as_hex: (a: number, b: number) => void;
  readonly header_get_hash_merkle_root_as_hex: (a: number, b: number) => void;
  readonly header_set_hash_merkle_root_from_js_value: (a: number, b: number) => void;
  readonly header_get_accepted_id_merkle_root_as_hex: (a: number, b: number) => void;
  readonly header_set_accepted_id_merkle_root_from_js_value: (a: number, b: number) => void;
  readonly header_get_utxo_commitment_as_hex: (a: number, b: number) => void;
  readonly header_set_utxo_commitment_from_js_value: (a: number, b: number) => void;
  readonly header_get_pruning_point_as_hex: (a: number, b: number) => void;
  readonly header_set_pruning_point_from_js_value: (a: number, b: number) => void;
  readonly header_get_parents_by_level_as_js_value: (a: number) => number;
  readonly header_set_parents_by_level_from_js_value: (a: number, b: number) => void;
  readonly header_blue_work: (a: number) => number;
  readonly header_getBlueWorkAsHex: (a: number, b: number) => void;
  readonly header_set_blue_work_from_js_value: (a: number, b: number) => void;
  readonly __wbg_scriptpublickey_free: (a: number) => void;
  readonly __wbg_get_scriptpublickey_version: (a: number) => number;
  readonly __wbg_set_scriptpublickey_version: (a: number, b: number) => void;
  readonly scriptpublickey_constructor: (a: number, b: number, c: number) => void;
  readonly scriptpublickey_script_as_hex: (a: number, b: number) => void;
  readonly __wbg_networkid_free: (a: number) => void;
  readonly __wbg_get_networkid_type: (a: number) => number;
  readonly __wbg_set_networkid_type: (a: number, b: number) => void;
  readonly __wbg_get_networkid_suffix: (a: number, b: number) => void;
  readonly __wbg_set_networkid_suffix: (a: number, b: number, c: number) => void;
  readonly networkid_ctor: (a: number, b: number) => void;
  readonly networkid_id: (a: number, b: number) => void;
  readonly networkid_addressPrefix: (a: number, b: number) => void;
  readonly networkid_toString: (a: number, b: number) => void;
  readonly __wbg_txutxoentry_free: (a: number) => void;
  readonly __wbg_get_txutxoentry_amount: (a: number) => number;
  readonly __wbg_set_txutxoentry_amount: (a: number, b: number) => void;
  readonly __wbg_get_txutxoentry_scriptPublicKey: (a: number) => number;
  readonly __wbg_set_txutxoentry_scriptPublicKey: (a: number, b: number) => void;
  readonly __wbg_get_txutxoentry_blockDaaScore: (a: number) => number;
  readonly __wbg_set_txutxoentry_blockDaaScore: (a: number, b: number) => void;
  readonly __wbg_get_txutxoentry_isCoinbase: (a: number) => number;
  readonly __wbg_set_txutxoentry_isCoinbase: (a: number, b: number) => void;
  readonly __wbg_transactioninput_free: (a: number) => void;
  readonly transactioninput_constructor: (a: number, b: number) => void;
  readonly transactioninput_get_previous_outpoint: (a: number) => number;
  readonly transactioninput_set_previous_outpoint: (a: number, b: number) => void;
  readonly transactioninput_get_signature_script_as_hex: (a: number, b: number) => void;
  readonly transactioninput_set_signature_script_from_js_value: (a: number, b: number) => void;
  readonly transactioninput_get_sequence: (a: number) => number;
  readonly transactioninput_set_sequence: (a: number, b: number) => void;
  readonly transactioninput_get_sig_op_count: (a: number) => number;
  readonly transactioninput_set_sig_op_count: (a: number, b: number) => void;
  readonly __wbg_signabletransaction_free: (a: number) => void;
  readonly __wbg_get_signabletransaction_entries: (a: number) => number;
  readonly __wbg_set_signabletransaction_entries: (a: number, b: number) => void;
  readonly signabletransaction_new_from_refs: (a: number, b: number) => number;
  readonly signabletransaction_tx_getter: (a: number) => number;
  readonly signabletransaction_toJSON: (a: number, b: number) => void;
  readonly signabletransaction_fromJSON: (a: number, b: number, c: number) => void;
  readonly signabletransaction_getScriptHashes: (a: number, b: number) => void;
  readonly signabletransaction_setSignatures: (a: number, b: number, c: number) => void;
  readonly signabletransaction_get_inputs: (a: number, b: number) => void;
  readonly signabletransaction_get_outputs: (a: number, b: number) => void;
  readonly __wbg_keypair_free: (a: number) => void;
  readonly keypair_get_public_key: (a: number) => number;
  readonly keypair_get_private_key: (a: number) => number;
  readonly keypair_get_xonly_public_key: (a: number) => number;
  readonly keypair_toAddress: (a: number, b: number, c: number) => void;
  readonly keypair_toAddressECDSA: (a: number, b: number, c: number) => void;
  readonly keypair_random: (a: number) => void;
  readonly keypair_fromPrivateKey: (a: number, b: number) => void;
  readonly privatekey_try_new: (a: number, b: number, c: number) => void;
  readonly privatekey_toString: (a: number, b: number) => void;
  readonly __wbg_publickey_free: (a: number) => void;
  readonly publickey_try_new: (a: number, b: number, c: number) => void;
  readonly publickey_toString: (a: number, b: number) => void;
  readonly publickey_toAddress: (a: number, b: number, c: number) => void;
  readonly publickey_toAddressECDSA: (a: number, b: number, c: number) => void;
  readonly privatekey_toKeypair: (a: number, b: number) => void;
  readonly __wbg_privatekey_free: (a: number) => void;
  readonly __wbg_scriptbuilder_free: (a: number) => void;
  readonly scriptbuilder_script: (a: number, b: number) => void;
  readonly scriptbuilder_drain: (a: number, b: number) => void;
  readonly scriptbuilder_addOp: (a: number, b: number, c: number) => void;
  readonly scriptbuilder_addOps: (a: number, b: number, c: number) => void;
  readonly scriptbuilder_addData: (a: number, b: number, c: number) => void;
  readonly scriptbuilder_addI64: (a: number, b: number, c: number) => void;
  readonly scriptbuilder_addLockTime: (a: number, b: number, c: number) => void;
  readonly scriptbuilder_addSequence: (a: number, b: number, c: number) => void;
  readonly signTransaction: (a: number, b: number, c: number, d: number) => void;
  readonly signScriptHash: (a: number, b: number, c: number) => void;
  readonly __wbg_transactionoutputinner_free: (a: number) => void;
  readonly __wbg_get_transactionoutputinner_value: (a: number) => number;
  readonly __wbg_set_transactionoutputinner_value: (a: number, b: number) => void;
  readonly __wbg_get_transactionoutputinner_scriptPublicKey: (a: number) => number;
  readonly __wbg_set_transactionoutputinner_scriptPublicKey: (a: number, b: number) => void;
  readonly __wbg_transactionoutput_free: (a: number) => void;
  readonly transactionoutput_new: (a: number, b: number) => number;
  readonly transactionoutput_value: (a: number) => number;
  readonly transactionoutput_set_value: (a: number, b: number) => void;
  readonly transactionoutput_scriptPublicKey: (a: number) => number;
  readonly transactionoutput_set_scriptPublicKey: (a: number, b: number) => void;
  readonly __wbg_transactionoutpoint_free: (a: number) => void;
  readonly transactionoutpoint_new: (a: number, b: number) => number;
  readonly transactionoutpoint_getId: (a: number, b: number) => void;
  readonly transactionoutpoint_transactionId: (a: number, b: number) => void;
  readonly transactionoutpoint_index: (a: number) => number;
  readonly __wbg_utxoentry_free: (a: number) => void;
  readonly __wbg_get_utxoentry_address: (a: number) => number;
  readonly __wbg_set_utxoentry_address: (a: number, b: number) => void;
  readonly __wbg_get_utxoentry_outpoint: (a: number) => number;
  readonly __wbg_set_utxoentry_outpoint: (a: number, b: number) => void;
  readonly __wbg_get_utxoentry_entry: (a: number) => number;
  readonly __wbg_set_utxoentry_entry: (a: number, b: number) => void;
  readonly __wbg_utxoentryreference_free: (a: number) => void;
  readonly utxoentryreference_entry: (a: number) => number;
  readonly utxoentryreference_getTransactionId: (a: number, b: number) => void;
  readonly utxoentryreference_getId: (a: number, b: number) => void;
  readonly utxoentryreference_amount: (a: number) => number;
  readonly utxoentryreference_isCoinbase: (a: number) => number;
  readonly utxoentryreference_blockDaaScore: (a: number) => number;
  readonly __wbg_utxoentries_free: (a: number) => void;
  readonly utxoentries_js_ctor: (a: number, b: number) => void;
  readonly utxoentries_get_items_as_js_array: (a: number) => number;
  readonly utxoentries_set_items_from_js_array: (a: number, b: number) => void;
  readonly utxoentries_sort: (a: number) => void;
  readonly utxoentries_amount: (a: number) => number;
  readonly __wbg_transaction_free: (a: number) => void;
  readonly transaction_is_coinbase: (a: number) => number;
  readonly transaction_finalize: (a: number, b: number) => void;
  readonly transaction_id: (a: number, b: number) => void;
  readonly transaction_constructor: (a: number, b: number) => void;
  readonly transaction_get_inputs_as_js_array: (a: number) => number;
  readonly transaction_set_inputs_from_js_array: (a: number, b: number) => void;
  readonly transaction_get_outputs_as_js_array: (a: number) => number;
  readonly transaction_set_outputs_from_js_array: (a: number, b: number) => void;
  readonly transaction_version: (a: number) => number;
  readonly transaction_set_version: (a: number, b: number) => void;
  readonly transaction_gas: (a: number) => number;
  readonly transaction_set_gas: (a: number, b: number) => void;
  readonly transaction_get_subnetwork_id_as_hex: (a: number, b: number) => void;
  readonly transaction_set_subnetwork_id_from_js_value: (a: number, b: number) => void;
  readonly transaction_get_payload_as_hex_string: (a: number, b: number) => void;
  readonly transaction_set_payload_from_js_value: (a: number, b: number) => void;
  readonly transaction_lock_time: (a: number) => number;
  readonly transaction_set_lock_time: (a: number, b: number) => void;
  readonly __wbg_hash_free: (a: number) => void;
  readonly hash_constructor: (a: number, b: number) => number;
  readonly hash_toString: (a: number, b: number) => void;
  readonly __wbg_state_free: (a: number) => void;
  readonly state_new: (a: number) => number;
  readonly state_target: (a: number, b: number) => void;
  readonly state_checkPow: (a: number, b: number, c: number) => void;
  readonly state_get_pre_pow_hash: (a: number, b: number) => void;
  readonly __wbg_pubkeyderivationmanager_free: (a: number) => void;
  readonly pubkeyderivationmanager_publicKey: (a: number, b: number) => void;
  readonly __wbg_balance_free: (a: number) => void;
  readonly balance_mature: (a: number) => number;
  readonly balance_pending: (a: number) => number;
  readonly balance_as_strings: (a: number, b: number, c: number) => void;
  readonly __wbg_balancestrings_free: (a: number) => void;
  readonly balancestrings_mature: (a: number) => number;
  readonly balancestrings_pending: (a: number) => number;
  readonly generatorsummary_networkType: (a: number) => number;
  readonly generatorsummary_utxos: (a: number) => number;
  readonly generatorsummary_fees: (a: number) => number;
  readonly generatorsummary_transactions: (a: number) => number;
  readonly generatorsummary_finalAmount: (a: number) => number;
  readonly generatorsummary_finalTransactionId: (a: number, b: number) => void;
  readonly __wbg_masscalculator_free: (a: number) => void;
  readonly masscalculator_new: (a: number) => number;
  readonly masscalculator_isStandardOutputAmountDust: (a: number) => number;
  readonly masscalculator_isTransactionOutputDust: (a: number, b: number) => void;
  readonly masscalculator_calcMassForTransaction: (a: number, b: number, c: number) => void;
  readonly masscalculator_blankTransactionMass: (a: number) => number;
  readonly masscalculator_calcMassForPayload: (a: number, b: number) => number;
  readonly masscalculator_calcMassForOutputs: (a: number, b: number, c: number) => void;
  readonly masscalculator_calcMassForInputs: (a: number, b: number, c: number) => void;
  readonly masscalculator_calcMassForOutput: (a: number, b: number, c: number) => void;
  readonly masscalculator_calcMassForInput: (a: number, b: number, c: number) => void;
  readonly masscalculator_calcSignatureMass: (a: number, b: number) => number;
  readonly masscalculator_calcSignatureMassForInputs: (a: number, b: number, c: number) => number;
  readonly masscalculator_calcMinimumTransactionRelayFeeFromMass: (a: number, b: number) => number;
  readonly masscalculator_calcMiniumTxRelayFee: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_account_free: (a: number) => void;
  readonly __wbg_get_account_context: (a: number) => number;
  readonly __wbg_set_account_context: (a: number, b: number) => void;
  readonly account_ctor: (a: number, b: number) => void;
  readonly account_balance: (a: number) => number;
  readonly account_type: (a: number, b: number) => void;
  readonly account_balanceStrings: (a: number, b: number, c: number) => void;
  readonly account_receiveAddress: (a: number, b: number) => void;
  readonly account_changeAddress: (a: number, b: number) => void;
  readonly account_deriveReceiveAddress: (a: number) => number;
  readonly account_deriveChangeAddress: (a: number) => number;
  readonly account_scan: (a: number) => number;
  readonly account_send: (a: number, b: number) => number;
  readonly masscalculator_minimumRequiredTransactionRelayFee: (a: number) => number;
  readonly masscalculator_minimumRelayTransactionFee: () => number;
  readonly masscalculator_maximumStandardTransactionMass: () => number;
  readonly masscalculator_blankTransactionSerializedByteSize: () => number;
  readonly __wbg_generatorsummary_free: (a: number) => void;
  readonly __wbg_generator_free: (a: number) => void;
  readonly generator_ctor: (a: number, b: number) => void;
  readonly generator_next: (a: number) => number;
  readonly generator_estimate: (a: number) => number;
  readonly generator_summary: (a: number) => number;
  readonly configureUtxoProcessing: (a: number, b: number) => void;
  readonly sompiToKaspa: (a: number, b: number) => void;
  readonly sompiToKaspaString: (a: number, b: number) => void;
  readonly sompiToKaspaStringWithSuffix: (a: number, b: number, c: number) => void;
  readonly __wbg_utxoprocessor_free: (a: number) => void;
  readonly __wbg_get_utxoprocessor_rpc: (a: number) => number;
  readonly __wbg_set_utxoprocessor_rpc: (a: number, b: number) => void;
  readonly __wbg_get_utxoprocessor_events: (a: number) => number;
  readonly __wbg_set_utxoprocessor_events: (a: number, b: number) => void;
  readonly utxoprocessor_ctor: (a: number) => number;
  readonly utxoprocessor_shutdown: (a: number) => number;
  readonly __wbg_xprivatekey_free: (a: number) => void;
  readonly xprivatekey_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly xprivatekey_receiveKey: (a: number, b: number, c: number) => void;
  readonly xprivatekey_changeKey: (a: number, b: number, c: number) => void;
  readonly kaspaToSompi: (a: number) => number;
  readonly __wbg_storage_free: (a: number) => void;
  readonly storage_filename: (a: number, b: number) => void;
  readonly __wbg_paymentoutput_free: (a: number) => void;
  readonly __wbg_get_paymentoutput_address: (a: number) => number;
  readonly __wbg_set_paymentoutput_address: (a: number, b: number) => void;
  readonly __wbg_get_paymentoutput_amount: (a: number) => number;
  readonly __wbg_set_paymentoutput_amount: (a: number, b: number) => void;
  readonly paymentoutput_new: (a: number, b: number) => number;
  readonly __wbg_paymentoutputs_free: (a: number) => void;
  readonly paymentoutputs_constructor: (a: number, b: number) => void;
  readonly __wbg_consensusparams_free: (a: number) => void;
  readonly getConsensusParametersByAddress: (a: number) => number;
  readonly getConsensusParametersByNetwork: (a: number) => number;
  readonly __wbg_pendingtransaction_free: (a: number) => void;
  readonly pendingtransaction_id: (a: number, b: number) => void;
  readonly pendingtransaction_paymentAmount: (a: number) => number;
  readonly pendingtransaction_changeAmount: (a: number) => number;
  readonly pendingtransaction_feeAmount: (a: number) => number;
  readonly pendingtransaction_aggregateInputAmount: (a: number) => number;
  readonly pendingtransaction_aggregateOutputAmount: (a: number) => number;
  readonly pendingtransaction_type: (a: number, b: number) => void;
  readonly pendingtransaction_addresses: (a: number) => number;
  readonly pendingtransaction_getUtxoEntries: (a: number) => number;
  readonly pendingtransaction_sign: (a: number, b: number, c: number) => void;
  readonly pendingtransaction_submit: (a: number, b: number) => number;
  readonly pendingtransaction_transaction: (a: number, b: number) => void;
  readonly __wbg_utxocontext_free: (a: number) => void;
  readonly utxocontext_ctor: (a: number) => number;
  readonly utxocontext_trackAddresses: (a: number, b: number, c: number) => number;
  readonly utxocontext_unregisterAddresses: (a: number, b: number) => number;
  readonly utxocontext_clear: (a: number) => number;
  readonly utxocontext_mature: (a: number, b: number) => void;
  readonly utxocontext_pending: (a: number, b: number) => void;
  readonly utxocontext_balance: (a: number) => number;
  readonly utxocontext_updateBalance: (a: number) => number;
  readonly __wbg_wallet_free: (a: number) => void;
  readonly __wbg_get_wallet_rpc: (a: number) => number;
  readonly __wbg_set_wallet_rpc: (a: number, b: number) => void;
  readonly __wbg_get_wallet_events: (a: number) => number;
  readonly __wbg_set_wallet_events: (a: number, b: number) => void;
  readonly wallet_constructor: (a: number, b: number) => void;
  readonly wallet_keys: (a: number) => number;
  readonly wallet_accounts: (a: number) => number;
  readonly wallet_accountIterator: (a: number, b: number) => number;
  readonly wallet_isOpen: (a: number) => number;
  readonly wallet_isSynced: (a: number) => number;
  readonly wallet_descriptor: (a: number, b: number) => void;
  readonly wallet_exists: (a: number, b: number) => number;
  readonly wallet_createWallet: (a: number, b: number) => number;
  readonly wallet_createPrvKeyData: (a: number, b: number) => number;
  readonly wallet_createAccount: (a: number, b: number, c: number, d: number) => number;
  readonly wallet_ping: (a: number) => number;
  readonly wallet_start: (a: number) => number;
  readonly wallet_stop: (a: number) => number;
  readonly wallet_connect: (a: number, b: number) => number;
  readonly wallet_disconnect: (a: number) => number;
  readonly createAddress: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly createMultisigAddress: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly createTransaction: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly createTransactions: (a: number) => number;
  readonly estimateTransactions: (a: number) => number;
  readonly __wbg_prvkeydatainfo_free: (a: number) => void;
  readonly prvkeydatainfo_id: (a: number, b: number) => void;
  readonly prvkeydatainfo_name: (a: number) => number;
  readonly prvkeydatainfo_isEncrypted: (a: number) => number;
  readonly prvkeydatainfo_setName: (a: number, b: number, c: number, d: number) => void;
  readonly sha256: (a: number, b: number) => void;
  readonly sha256d: (a: number, b: number) => void;
  readonly argon2sha256iv: (a: number, b: number, c: number) => void;
  readonly encryptXChaCha20Poly1305: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly decryptXChaCha20Poly1305: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly signMessage: (a: number, b: number) => void;
  readonly verifyMessage: (a: number, b: number) => void;
  readonly __wbg_xpublickey_free: (a: number) => void;
  readonly xpublickey_fromXPub: (a: number, b: number, c: number, d: number) => number;
  readonly xpublickey_fromMasterXPrv: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly xpublickey_receivePubkeys: (a: number, b: number, c: number) => number;
  readonly xpublickey_changePubkeys: (a: number, b: number, c: number) => number;
  readonly __wbg_pubkeyderivationmanagerv0_free: (a: number) => void;
  readonly pubkeyderivationmanagerv0_publicKey: (a: number, b: number) => void;
  readonly calculateDifficulty: (a: number, b: number) => void;
  readonly __wbg_rpcclient_free: (a: number) => void;
  readonly rpcclient_new: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly rpcclient_url: (a: number, b: number) => void;
  readonly rpcclient_open: (a: number) => number;
  readonly rpcclient_connect: (a: number, b: number) => number;
  readonly rpcclient_disconnect: (a: number) => number;
  readonly rpcclient_notify: (a: number, b: number) => number;
  readonly rpcclient_defaultPort: (a: number, b: number, c: number) => void;
  readonly rpcclient_parseUrl: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly rpcclient_subscribeDaaScore: (a: number) => number;
  readonly rpcclient_unsubscribeDaaScore: (a: number) => number;
  readonly rpcclient_subscribeUtxosChanged: (a: number, b: number) => number;
  readonly rpcclient_unsubscribeUtxosChanged: (a: number, b: number) => number;
  readonly rpcclient_subscribeVirtualChainChanged: (a: number, b: number) => number;
  readonly rpcclient_unsubscribeVirtualChainChanged: (a: number, b: number) => number;
  readonly rpcclient_subscribeBlockAdded: (a: number) => number;
  readonly rpcclient_unsubscribeBlockAdded: (a: number) => number;
  readonly rpcclient_subscribeFinalityConflict: (a: number) => number;
  readonly rpcclient_unsubscribeFinalityConflict: (a: number) => number;
  readonly rpcclient_subscribeFinalityConflictResolved: (a: number) => number;
  readonly rpcclient_unsubscribeFinalityConflictResolved: (a: number) => number;
  readonly rpcclient_subscribeSinkBlueScoreChanged: (a: number) => number;
  readonly rpcclient_unsubscribeSinkBlueScoreChanged: (a: number) => number;
  readonly rpcclient_subscribeVirtualDaaScoreChanged: (a: number) => number;
  readonly rpcclient_unsubscribeVirtualDaaScoreChanged: (a: number) => number;
  readonly rpcclient_subscribePruningPointUtxoSetOverride: (a: number) => number;
  readonly rpcclient_unsubscribePruningPointUtxoSetOverride: (a: number) => number;
  readonly rpcclient_subscribeNewBlockTemplate: (a: number) => number;
  readonly rpcclient_unsubscribeNewBlockTemplate: (a: number) => number;
  readonly rpcclient_getBlockCount: (a: number) => number;
  readonly rpcclient_getBlockDagInfo: (a: number) => number;
  readonly rpcclient_getCoinSupply: (a: number) => number;
  readonly rpcclient_getConnectedPeerInfo: (a: number) => number;
  readonly rpcclient_getInfo: (a: number) => number;
  readonly rpcclient_getPeerAddresses: (a: number) => number;
  readonly rpcclient_getMetrics: (a: number) => number;
  readonly rpcclient_getSink: (a: number) => number;
  readonly rpcclient_getSinkBlueScore: (a: number) => number;
  readonly rpcclient_ping: (a: number) => number;
  readonly rpcclient_shutdown: (a: number) => number;
  readonly rpcclient_getServerInfo: (a: number) => number;
  readonly rpcclient_getSyncStatus: (a: number) => number;
  readonly rpcclient_addPeer: (a: number, b: number) => number;
  readonly rpcclient_ban: (a: number, b: number) => number;
  readonly rpcclient_estimateNetworkHashesPerSecond: (a: number, b: number) => number;
  readonly rpcclient_getBalanceByAddress: (a: number, b: number) => number;
  readonly rpcclient_getBalancesByAddresses: (a: number, b: number) => number;
  readonly rpcclient_getBlock: (a: number, b: number) => number;
  readonly rpcclient_getBlocks: (a: number, b: number) => number;
  readonly rpcclient_getBlockTemplate: (a: number, b: number) => number;
  readonly rpcclient_getCurrentNetwork: (a: number, b: number) => number;
  readonly rpcclient_getHeaders: (a: number, b: number) => number;
  readonly rpcclient_getMempoolEntries: (a: number, b: number) => number;
  readonly rpcclient_getMempoolEntriesByAddresses: (a: number, b: number) => number;
  readonly rpcclient_getMempoolEntry: (a: number, b: number) => number;
  readonly rpcclient_getSubnetwork: (a: number, b: number) => number;
  readonly rpcclient_getVirtualChainFromBlock: (a: number, b: number) => number;
  readonly rpcclient_resolveFinalityConflict: (a: number, b: number) => number;
  readonly rpcclient_submitBlock: (a: number, b: number) => number;
  readonly rpcclient_unban: (a: number, b: number) => number;
  readonly rpcclient_submitTransaction: (a: number, b: number, c: number) => number;
  readonly rpcclient_getUtxosByAddresses: (a: number, b: number) => number;
  readonly rpcclient_getUtxosByAddressesCall: (a: number, b: number) => number;
  readonly __wbg_consoleconstructoroptions_free: (a: number) => void;
  readonly consoleconstructoroptions_new_with_values: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly consoleconstructoroptions_new: (a: number, b: number) => number;
  readonly consoleconstructoroptions_stdout: (a: number) => number;
  readonly consoleconstructoroptions_set_stdout: (a: number, b: number) => void;
  readonly consoleconstructoroptions_stderr: (a: number) => number;
  readonly consoleconstructoroptions_set_stderr: (a: number, b: number) => void;
  readonly consoleconstructoroptions_ignore_errors: (a: number) => number;
  readonly consoleconstructoroptions_set_ignore_errors: (a: number, b: number) => void;
  readonly consoleconstructoroptions_color_mod: (a: number) => number;
  readonly consoleconstructoroptions_set_color_mod: (a: number, b: number) => void;
  readonly consoleconstructoroptions_inspect_options: (a: number) => number;
  readonly consoleconstructoroptions_set_inspect_options: (a: number, b: number) => void;
  readonly writestream_add_listener_with_open: (a: number, b: number) => number;
  readonly writestream_add_listener_with_close: (a: number, b: number) => number;
  readonly writestream_on_with_open: (a: number, b: number) => number;
  readonly writestream_on_with_close: (a: number, b: number) => number;
  readonly writestream_once_with_open: (a: number, b: number) => number;
  readonly writestream_once_with_close: (a: number, b: number) => number;
  readonly writestream_prepend_listener_with_open: (a: number, b: number) => number;
  readonly writestream_prepend_listener_with_close: (a: number, b: number) => number;
  readonly writestream_prepend_once_listener_with_open: (a: number, b: number) => number;
  readonly writestream_prepend_once_listener_with_close: (a: number, b: number) => number;
  readonly __wbg_getnameoptions_free: (a: number) => void;
  readonly getnameoptions_new: (a: number, b: number, c: number, d: number) => number;
  readonly getnameoptions_family: (a: number) => number;
  readonly getnameoptions_set_family: (a: number, b: number) => void;
  readonly getnameoptions_host: (a: number) => number;
  readonly getnameoptions_set_host: (a: number, b: number) => void;
  readonly getnameoptions_local_address: (a: number) => number;
  readonly getnameoptions_set_local_address: (a: number, b: number) => void;
  readonly getnameoptions_port: (a: number) => number;
  readonly getnameoptions_set_port: (a: number, b: number) => void;
  readonly readstream_add_listener_with_open: (a: number, b: number) => number;
  readonly readstream_add_listener_with_close: (a: number, b: number) => number;
  readonly readstream_on_with_open: (a: number, b: number) => number;
  readonly readstream_on_with_close: (a: number, b: number) => number;
  readonly readstream_once_with_open: (a: number, b: number) => number;
  readonly readstream_once_with_close: (a: number, b: number) => number;
  readonly readstream_prepend_listener_with_open: (a: number, b: number) => number;
  readonly readstream_prepend_listener_with_close: (a: number, b: number) => number;
  readonly readstream_prepend_once_listener_with_open: (a: number, b: number) => number;
  readonly readstream_prepend_once_listener_with_close: (a: number, b: number) => number;
  readonly __wbg_assertionerroroptions_free: (a: number) => void;
  readonly assertionerroroptions_new: (a: number, b: number, c: number, d: number) => number;
  readonly assertionerroroptions_message: (a: number) => number;
  readonly assertionerroroptions_set_message: (a: number, b: number) => void;
  readonly assertionerroroptions_actual: (a: number) => number;
  readonly assertionerroroptions_set_actual: (a: number, b: number) => void;
  readonly assertionerroroptions_expected: (a: number) => number;
  readonly assertionerroroptions_set_expected: (a: number, b: number) => void;
  readonly assertionerroroptions_operator: (a: number) => number;
  readonly assertionerroroptions_set_operator: (a: number, b: number) => void;
  readonly __wbg_wasioptions_free: (a: number) => void;
  readonly wasioptions_new_with_values: (a: number, b: number, c: number, d: number) => number;
  readonly wasioptions_new: (a: number) => number;
  readonly wasioptions_args: (a: number, b: number) => void;
  readonly wasioptions_set_args: (a: number, b: number, c: number) => void;
  readonly wasioptions_set_env: (a: number, b: number) => void;
  readonly wasioptions_env: (a: number) => number;
  readonly wasioptions_set_preopens: (a: number, b: number) => void;
  readonly wasioptions_preopens: (a: number) => number;
  readonly __wbg_agentconstructoroptions_free: (a: number) => void;
  readonly agentconstructoroptions_keep_alive_msecs: (a: number) => number;
  readonly agentconstructoroptions_set_keep_alive_msecs: (a: number, b: number) => void;
  readonly agentconstructoroptions_keep_alive: (a: number) => number;
  readonly agentconstructoroptions_set_keep_alive: (a: number, b: number) => void;
  readonly agentconstructoroptions_max_free_sockets: (a: number) => number;
  readonly agentconstructoroptions_set_max_free_sockets: (a: number, b: number) => void;
  readonly agentconstructoroptions_max_sockets: (a: number) => number;
  readonly agentconstructoroptions_set_max_sockets: (a: number, b: number) => void;
  readonly agentconstructoroptions_timeout: (a: number) => number;
  readonly agentconstructoroptions_set_timeout: (a: number, b: number) => void;
  readonly __wbg_appendfileoptions_free: (a: number) => void;
  readonly appendfileoptions_new_with_values: (a: number, b: number, c: number, d: number) => number;
  readonly appendfileoptions_new: () => number;
  readonly appendfileoptions_encoding: (a: number) => number;
  readonly appendfileoptions_set_encoding: (a: number, b: number) => void;
  readonly appendfileoptions_mode: (a: number, b: number) => void;
  readonly appendfileoptions_set_mode: (a: number, b: number, c: number) => void;
  readonly appendfileoptions_flag: (a: number) => number;
  readonly appendfileoptions_set_flag: (a: number, b: number) => void;
  readonly __wbg_createreadstreamoptions_free: (a: number) => void;
  readonly createreadstreamoptions_new_with_values: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number) => number;
  readonly createreadstreamoptions_auto_close: (a: number) => number;
  readonly createreadstreamoptions_set_auto_close: (a: number, b: number) => void;
  readonly createreadstreamoptions_emit_close: (a: number) => number;
  readonly createreadstreamoptions_set_emit_close: (a: number, b: number) => void;
  readonly createreadstreamoptions_encoding: (a: number) => number;
  readonly createreadstreamoptions_set_encoding: (a: number, b: number) => void;
  readonly createreadstreamoptions_end: (a: number, b: number) => void;
  readonly createreadstreamoptions_set_end: (a: number, b: number, c: number) => void;
  readonly createreadstreamoptions_fd: (a: number, b: number) => void;
  readonly createreadstreamoptions_set_fd: (a: number, b: number, c: number) => void;
  readonly createreadstreamoptions_flags: (a: number) => number;
  readonly createreadstreamoptions_set_flags: (a: number, b: number) => void;
  readonly createreadstreamoptions_high_water_mark: (a: number, b: number) => void;
  readonly createreadstreamoptions_set_high_water_mark: (a: number, b: number, c: number) => void;
  readonly createreadstreamoptions_mode: (a: number, b: number) => void;
  readonly createreadstreamoptions_set_mode: (a: number, b: number, c: number) => void;
  readonly createreadstreamoptions_start: (a: number, b: number) => void;
  readonly createreadstreamoptions_set_start: (a: number, b: number, c: number) => void;
  readonly __wbg_writefilesyncoptions_free: (a: number) => void;
  readonly writefilesyncoptions_new: (a: number, b: number, c: number, d: number) => number;
  readonly writefilesyncoptions_flag: (a: number) => number;
  readonly writefilesyncoptions_set_flag: (a: number, b: number) => void;
  readonly writefilesyncoptions_mode: (a: number, b: number) => void;
  readonly writefilesyncoptions_set_mode: (a: number, b: number, c: number) => void;
  readonly writefilesyncoptions_encoding: (a: number) => number;
  readonly writefilesyncoptions_set_encoding: (a: number, b: number) => void;
  readonly __wbg_setaadoptions_free: (a: number) => void;
  readonly setaadoptions_new: (a: number, b: number, c: number) => number;
  readonly setaadoptions_flush: (a: number) => number;
  readonly setaadoptions_set_flush: (a: number, b: number) => void;
  readonly setaadoptions_plaintextLength: (a: number) => number;
  readonly setaadoptions_set_plaintext_length: (a: number, b: number) => void;
  readonly setaadoptions_transform: (a: number) => number;
  readonly setaadoptions_set_transform: (a: number, b: number) => void;
  readonly __wbg_streamtransformoptions_free: (a: number) => void;
  readonly streamtransformoptions_flush: (a: number) => number;
  readonly streamtransformoptions_set_flush: (a: number, b: number) => void;
  readonly streamtransformoptions_transform: (a: number) => number;
  readonly streamtransformoptions_set_transform: (a: number, b: number) => void;
  readonly streamtransformoptions_new: (a: number, b: number) => number;
  readonly __wbg_mkdtempsyncoptions_free: (a: number) => void;
  readonly mkdtempsyncoptions_new_with_values: (a: number) => number;
  readonly mkdtempsyncoptions_new: () => number;
  readonly mkdtempsyncoptions_encoding: (a: number) => number;
  readonly mkdtempsyncoptions_set_encoding: (a: number, b: number) => void;
  readonly userinfooptions_encoding: (a: number) => number;
  readonly userinfooptions_set_encoding: (a: number, b: number) => void;
  readonly userinfooptions_new_with_values: (a: number) => number;
  readonly __wbg_userinfooptions_free: (a: number) => void;
  readonly userinfooptions_new: () => number;
  readonly __wbg_createwritestreamoptions_free: (a: number) => void;
  readonly createwritestreamoptions_new_with_values: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly createwritestreamoptions_auto_close: (a: number) => number;
  readonly createwritestreamoptions_set_auto_close: (a: number, b: number) => void;
  readonly createwritestreamoptions_emit_close: (a: number) => number;
  readonly createwritestreamoptions_set_emit_close: (a: number, b: number) => void;
  readonly createwritestreamoptions_encoding: (a: number) => number;
  readonly createwritestreamoptions_set_encoding: (a: number, b: number) => void;
  readonly createwritestreamoptions_fd: (a: number, b: number) => void;
  readonly createwritestreamoptions_set_fd: (a: number, b: number, c: number) => void;
  readonly createwritestreamoptions_flags: (a: number) => number;
  readonly createwritestreamoptions_set_flags: (a: number, b: number) => void;
  readonly createwritestreamoptions_mode: (a: number, b: number) => void;
  readonly createwritestreamoptions_set_mode: (a: number, b: number, c: number) => void;
  readonly createwritestreamoptions_start: (a: number, b: number) => void;
  readonly createwritestreamoptions_set_start: (a: number, b: number, c: number) => void;
  readonly __wbg_netserveroptions_free: (a: number) => void;
  readonly netserveroptions_allow_half_open: (a: number) => number;
  readonly netserveroptions_set_allow_half_open: (a: number, b: number) => void;
  readonly netserveroptions_pause_on_connect: (a: number) => number;
  readonly netserveroptions_set_pause_on_connect: (a: number, b: number) => void;
  readonly __wbg_formatinputpathobject_free: (a: number) => void;
  readonly formatinputpathobject_new_with_values: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly formatinputpathobject_new: () => number;
  readonly formatinputpathobject_base: (a: number) => number;
  readonly formatinputpathobject_set_base: (a: number, b: number) => void;
  readonly formatinputpathobject_dir: (a: number) => number;
  readonly formatinputpathobject_set_dir: (a: number, b: number) => void;
  readonly formatinputpathobject_ext: (a: number) => number;
  readonly formatinputpathobject_set_ext: (a: number, b: number) => void;
  readonly formatinputpathobject_name: (a: number) => number;
  readonly formatinputpathobject_set_name: (a: number, b: number) => void;
  readonly formatinputpathobject_root: (a: number) => number;
  readonly formatinputpathobject_set_root: (a: number, b: number) => void;
  readonly __wbg_pipeoptions_free: (a: number) => void;
  readonly pipeoptions_new: (a: number) => number;
  readonly pipeoptions_end: (a: number) => number;
  readonly pipeoptions_set_end: (a: number, b: number) => void;
  readonly processsendoptions_swallow_errors: (a: number) => number;
  readonly processsendoptions_set_swallow_errors: (a: number, b: number) => void;
  readonly processsendoptions_new: (a: number) => number;
  readonly __wbg_processsendoptions_free: (a: number) => void;
  readonly __wbg_createhookcallbacks_free: (a: number) => void;
  readonly createhookcallbacks_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly createhookcallbacks_init: (a: number) => number;
  readonly createhookcallbacks_set_init: (a: number, b: number) => void;
  readonly createhookcallbacks_before: (a: number) => number;
  readonly createhookcallbacks_set_before: (a: number, b: number) => void;
  readonly createhookcallbacks_after: (a: number) => number;
  readonly createhookcallbacks_set_after: (a: number, b: number) => void;
  readonly createhookcallbacks_destroy: (a: number) => number;
  readonly createhookcallbacks_set_destroy: (a: number, b: number) => void;
  readonly createhookcallbacks_promise_resolve: (a: number) => number;
  readonly createhookcallbacks_set_promise_resolve: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_6_1_context_create: (a: number) => number;
  readonly rustsecp256k1_v0_6_1_context_destroy: (a: number) => void;
  readonly rustsecp256k1_v0_6_1_default_illegal_callback_fn: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_6_1_default_error_callback_fn: (a: number, b: number) => void;
  readonly __wbg_abortable_free: (a: number) => void;
  readonly abortable_new: () => number;
  readonly abortable_isAborted: (a: number) => number;
  readonly abortable_abort: (a: number) => void;
  readonly abortable_check: (a: number, b: number) => void;
  readonly __wbg_aborted_free: (a: number) => void;
  readonly test: () => number;
  readonly asyncstreamproxy_next: (a: number) => number;
  readonly __wbg_asyncstreamproxy_free: (a: number) => void;
  readonly initBrowserPanicHook: () => void;
  readonly initConsolePanicHook: () => void;
  readonly presentPanicHookLogs: () => void;
  readonly defer: () => number;
  readonly __wbg_eventdispatcher_free: (a: number) => void;
  readonly eventdispatcher_new: () => number;
  readonly eventdispatcher_listener: (a: number) => number;
  readonly eventdispatcher_set_listener: (a: number, b: number, c: number) => void;
  readonly eventdispatcher_registerListener: (a: number, b: number, c: number) => void;
  readonly eventdispatcher_removeListener: (a: number, b: number) => void;
  readonly eventdispatcher_stop: (a: number) => number;
  readonly __wbindgen_export_0: (a: number, b: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_export_3: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_4: (a: number, b: number) => void;
  readonly __wbindgen_export_5: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_6: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_7: (a: number, b: number) => void;
  readonly __wbindgen_export_8: (a: number) => void;
  readonly __wbindgen_export_9: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_10: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
