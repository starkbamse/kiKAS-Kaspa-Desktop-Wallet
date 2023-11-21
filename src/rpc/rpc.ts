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