import { useState } from "react";
import { useCounter } from "../hooks"
import {Small} from "./Small";


export const Memorize = () => {

    const vinicial = 10;
    const vI = 2;
    const vmin = 0;

    const { counter, incrementar } = useCounter(vinicial,vI,vmin)

    const [showMsg, setShowMsg] = useState(true)

  return (
    <>
        <h1>Counter: <Small value={counter} /> </h1>
    
        <button onClick={incrementar} >+{vI}</button>

        <button onClick={ () => setShowMsg( !showMsg ) } >Show/hide {JSON.stringify(showMsg)} </button>
    
    </>
  )
}
