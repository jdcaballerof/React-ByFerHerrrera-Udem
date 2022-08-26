import { useState } from "react"



export default function AddCategoria( {onNewCategory} ) {   //Recuuerda que al desestructurar usas las Key's pero se esta tomando el Valor

    const [inputValue, setInputValue] = useState('');   //Hook para ingresar valor
    const onInput_change = (event) =>  {
        setInputValue(event.target.value)   //Pon de valor(event.target.value) "recibe que teclas presionas"
    }


    const alEnviar = (eventoDarEnter) =>{
        eventoDarEnter.preventDefault();   //Evita recargar la pagina por haber enviado el formulario
        if ( inputValue.trim().length < 1 ) return;

        onNewCategory(inputValue.trim())    //Realmente dice: onAddCateg(inputValue.trim())
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
