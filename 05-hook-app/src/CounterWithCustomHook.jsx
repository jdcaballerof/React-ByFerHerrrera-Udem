import { useCounter } from "./hooks/useCounter";


   
   export const CounterWithCustomHook = () => {

    const vI = 100;
    const incre = 20;
    const decre = 55;

    const { counter, incrementar, decrementar, resetear } = useCounter(vI, decre); //* Se le puede pasar valores de esta forma... *1
   

     return (
       <>
         <h2>Counter With CustomHook: {counter} </h2>

        <button onClick={ () => incrementar(incre) } >+{incre}</button>  {/* *1  ...ó de esta forma */}
        <button onClick={ decrementar } >-{ decre }</button>
        <button onClick={ resetear } >Reset a {vI} </button>


         <hr />
       </>
     );
   }
   