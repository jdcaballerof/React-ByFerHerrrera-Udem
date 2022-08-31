import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (numIteraciones = 100) => {
  for (let i = 0; i < numIteraciones; i++) {  console.log("ahi vamos...");   }
  
  return `${numIteraciones} iteraciones realizadas desde heavyStuff`      }


export const MemoHook = () => {

    const vinicial = 1000;
    const vI = 1;
    const vmin = 0;

    const { counter, incrementar } = useCounter(vinicial,vI,vmin)
    const [showMsg, setShowMsg] = useState(true)

    const memoValue = useMemo(() => heavyStuff( counter ), [counter])

  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <h4>{ memoValue }</h4>
    
        <button onClick={incrementar} >+{vI}</button>

        <button onClick={ () => setShowMsg( !showMsg ) } >Show/hide {JSON.stringify(showMsg)} </button>
    
    </>
  )
}
