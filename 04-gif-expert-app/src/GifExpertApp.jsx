
import { useState } from 'react'
import AddCategoria from './Components/AddCategoria';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    //  AddCategoria
    const [ categorias, setCateg] = useState( [] );

    const onAddCateg = ( inputValueTrim ) => {
        setCateg([ inputValueTrim, ...categorias])
    }
    //  AddCategoria
    

  return (
  <>
        <h1>GifExpertApp</h1>

        <AddCategoria onNewCategory={ onAddCateg } //setCateg={ setCateg }
        /> 

        { 
            categorias.map( (item, indice ) => (
                <GifGrid key={item +" "+ indice} categoria={item} numDeGifs={10} />
            )) 
        }
    



    </>
    )
}
