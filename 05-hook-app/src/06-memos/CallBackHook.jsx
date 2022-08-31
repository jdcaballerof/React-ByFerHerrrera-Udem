import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementar = useCallback( ( val =1 ) => {    //la funcion flecha es la que se le asigna a la cte incrementar(XxX) : incrementar = useCallback( (XxX) => {}
            setCounter( (valorC) => valorC + val );
            // °1.2 No puede ser de esta forma porque el counter tambien esta memorizado con el valor 10. Al ponerlo entre parentesis (valorC) se manda internamente a la funcion el valor y ahi si se puede modificar (por ser una var local)
            // setCounter( counter+1 );  °1
        }, 
        [], // °1.1 si se pone [counter] para que realice la funcion cada vez que cambia el counter la funcion cambia y por ende la Prop tambien haciendo que se renderice de nuevo el componente
    );


  return (
    <>
      <h1>useCallback Hook: {counter} </h1>

      <ShowIncrement incrementarProp={ incrementar } />
    </>
  );
};
