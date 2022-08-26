import { useState } from 'react'

export const CounterApp = ({valorInicial}) => {

    const [counter, setCounter] = useState( valorInicial );

    const addUno = () => {
        setCounter((c) => c+1);
    }

    const restUno = () => {
        setCounter((c) => c-1);
    }
    const restUnoSoloPos = () => {
        setCounter((c) => { 
            if (c > 0){
                return c-1
            }
            return c
        });
    }

    const resetC = () => {
        setCounter((c) => c = valorInicial);
    }


    return( <>
        <h2> Contador: { counter } </h2>
        <button onClick={ addUno } > +1 </button>
        <button onClick={ restUnoSoloPos } > -1 </button>
        <button onClick={ resetC } > Reset </button>
        </>
    )

    // useSatet es para asignar primeramente un valor a una constante y luego, mediante una función, poder alterar ese valor 
}