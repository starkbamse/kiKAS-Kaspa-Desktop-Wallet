import "solid-js";
import { Setter, Store } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface DOMAttributes<T> {
      'use:model'?: [Store<string>, Setter<string>];
      'use:chkbox'?: [Store<string>, Setter<boolean>];
    }
  }
}
declare global {
  interface Window { 
    electronAPI: {
      sendEncryptedData: (data:{cipher:string[],name:string}) => void;
      requestEncryptedData: (data:string, func: Function) => void;
      requestWalletList: (func: Function) => void;
      requestRPCConnect:(data:string,func:Function)=>void;
      requestUTXO:(data:string,func:Function)=>void;
      
    };
  }
}