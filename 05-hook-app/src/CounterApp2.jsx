import { useState } from "react";


export function CounterApp2() {

    const [ {counter1, counter2, counter3}, setCounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30
    })

  return (
    <>
      <h2>Counter1: {counter1} </h2>
      <h2>Counter2: {counter2} </h2>
      <h2>Counter3: {counter3} </h2>
{/* Al solo poner   setCounter( counter + 1 ) se cambia de tipo objeto a por tipo numero */}
      <button onClick={() => setCounter({   
        counter1: counter1 + 1,
        counter2,   // =  counter2 : counter2 
        counter3 
      }) }>+1</button>
      <hr />
    </>
  );
}
