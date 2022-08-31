import { useCounter, useFetch } from "../hooks"
import LoadingQuote from "./LoadingQuote"
import Quote from "./Quote"



export const MultipleCustomHooks = () => {

    const { counter, incrementar,decrementar, resetear } = useCounter(1, 1, 1)  // no hay quotes de la 31-62 y +103

    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    console.log(data) // para desestructurar la data hay 2 formas *1 *2

// *2 Forma2: si lo negamos con un "!" se convierte en true :o, entonces ayudandonos de un pequeño if y sabiendo que si se niega 2 veces cualquier dato arroja True (excepto null/undefined), queda: 
    const { quote, author } = !!data && data[0] ;


  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <h2>Quote #{counter}</h2>



      { isLoading ? <LoadingQuote /> : <Quote quote1={ quote } data1={ data } /> }

      <button onClick={ decrementar } >Back quote</button>
      <button onClick={ incrementar } >Next quote</button>
      <button onClick={ resetear } >Reset</button>
    </>
  );
}
