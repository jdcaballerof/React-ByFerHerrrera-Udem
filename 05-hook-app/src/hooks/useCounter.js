import { useState } from "react"



export const useCounter = ( valorInicial = 0, valorIterar = 1, valormin = 0 ) => {

    const [counter, setCounter] = useState( valorInicial)

    // const incrementar = ( valorIterar = 1) => { setCounter(counter + valorIterar)  }
    const incrementar = () => { setCounter(counter + valorIterar)  }

    const decrementar = () => { setCounter( ((counter-valorIterar) > valormin)? (counter - valorIterar) : valormin )  }
    
    const resetear = () => { setCounter( valorInicial)  }

  return {
    counter,
    incrementar,
    decrementar,
    resetear,
  }
}
