// Run with: node demo.js
globalThis.WebSocket = require("websocket").w3cwebsocket;
import {Encoding, NetworkId, RpcClient} from "../kaspa/kaspa_wasm"

export let client:RpcClient;

type ServerStatus = {
    rpcApiVersion: number[],
  serverVersion: string,
  networkId: string,
  hasUtxoIndex: boolean,
  isSynced: boolean,
  virtualDaaScore: bigint  
}

export interface AccountDetail {
    utxos:any[]
    balance:{balance:bigint}
}

export async function setClient(url:string):Promise<ServerStatus> {
    return new Promise((resolve,reject)=>{
        client=new RpcClient(url,
            Encoding.Borsh,
            new NetworkId("mainnet"))
        client.connect(null).then(()=>{
            client.getServerInfo().then((result:ServerStatus)=>{
                resolve(result)
            }).catch((err)=>{
                console.log(err)
                reject(new Error("RPC Connection Failed!"))
            })
        })

    })
}

export async function getUtxosByAddresses(address:string):Promise<AccountDetail>{
    let entries=await client.getUtxosByAddresses([address])
    let balance=await client.getBalanceByAddress({address:address})
    entries.sort((a:any, b:any) => a.utxoEntry.amount > b.utxoEntry.amount || -(a.utxoEntry.amount < b.utxoEntry.amount));
    let accountDetail:AccountDetail={
        utxos:entries,
        balance:balance
    }
    return accountDetail
}