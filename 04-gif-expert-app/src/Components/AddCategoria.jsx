import { useState } from "react"



export default function AddCategoria( {onNewCategory} ) {

    const [inputValue, setInputValue] = useState('')

    const onInput_change = (event) =>  {
        setInputValue(event.target.value)   //Pon de valor(event.target.value) "recibe que teclas presionas"
    }

    const alEnviar = (event) =>{
        event.preventDefault();
        if ( inputValue.trim().length < 1 ) return;

        onNewCategory(inputValue.trim())
        // setCateg( c => [ inputValue , ...c] )
        setInputValue(""); //Si se quiere que al enviar se limpie el buscador 
    }


  return (<form onSubmit={ alEnviar }>
  <input 
    type="text"
    placeholder="Buscar gifs de..."
    value={ inputValue }        //determinar valor inicial
    onChange={ event => onInput_change(event) }  //Al cambiar en algo haz esa función
  />

    {/* <button onClick={ onAddCateg }>Agregar categoria</button> */}


</form>)
}
