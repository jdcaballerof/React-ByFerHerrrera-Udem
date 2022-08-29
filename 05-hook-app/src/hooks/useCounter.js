import { useState } from "react"



export const useCounter = ( valorInicial = 0, valorIterar = 1 ) => {

    const [counter, setCounter] = useState( valorInicial)

    const incrementar = ( valorIterar = 1) => { setCounter(counter + valorIterar)  }
    const decrementar = () => { setCounter( (counter > 0)? (counter - valorIterar) : 0 )  }
    const resetear = () => { setCounter( valorInicial)  }

  return {
    counter,
    incrementar,
    decrementar,
    resetear,
  }
}
