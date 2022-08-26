import { useState } from "react"



export default function AddCategoria( {setCateg} ) {   //Recuuerda que al desestructurar usas las Key's pero se esta tomando el Valor

    const onAddCateg = () => {
        // categorias.push("Gohan");
        // setCateg( c => [...c,'Halo'] )
    }
    

    const [inputValue, setInputValue] = useState('')

    const onInput_change = (event) =>  {
        // setInputValue('Cambiaste el valor :o')   //Pon de valor(lo de aqui)
        setInputValue(event.target.value)   //Pon de valor(lo de aqui)   event.target.value : recibe que teclas presionamos
    }

    const alEnviar = (event) =>{
        event.preventDefault();
        setCateg( c => [...c, inputValue] )
    }


                        //Se puede obiar el event dado que estamos mandado una funcion cuyo primer argumento es el argumento que se envia por lo que queda de la sig forma  *tambien se desestructura al crear la func   <form onSubmit={ event => alEnviar(event) }> pasa a <form onSubmit={ alEnviar }>     No sirve en este caso pero se supone que si en onInput_change 
  return (<form onSubmit={ event => alEnviar(event) }>
  <input 
    type="text"
    placeholder="Buscar gifs de..."
    value={ inputValue }        //determinar valor inicial
    onChange={ event => onInput_change(event) }  //Al cambiar en algo haz esa función
  />

    <button onClick={ onAddCateg }>Agregar categoria</button>


</form>)
}
