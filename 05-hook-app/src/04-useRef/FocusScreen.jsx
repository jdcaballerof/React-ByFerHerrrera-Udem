import { useRef } from "react";

export const FocusScreen = () => {
  const refInput = useRef();

  const onClick = () => {
    // .currente para hacer referencia al valor actual
    refInput.current.select(); //Tambien puede ser .focus()
  };

  return (
    <>
      <h1>Focus Screen</h1>

      {/* Manda la referencia del elemento a refInput */}
      <input type="text" placeholder="Ingrese su nombre" />
      <input ref={refInput} type="text" placeholder="Ingrese su nombre" />
      <input type="text" placeholder="Ingrese su nombre" />
      <input type="text" placeholder="Ingrese su nombre" />
      <button onClick={onClick}>Clic me</button>
    </>
  );
};
