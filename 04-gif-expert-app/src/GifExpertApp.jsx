
import { useState } from 'react'
import AddCategoria from './Components/AddCategoria';

export const GifExpertApp = () => {

    const [ categorias, setCateg] = useState( ['Goku', 'Ben 10', 'Timmy', 'Jimmy'] );

    const onAddCateg = ( newCategory ) => {
        // console.log(newCategory)
        setCateg([ newCategory, ...categorias])
    }
    


  return (
  <>
    <h1>GifExpertApp</h1>

    <AddCategoria onNewCategory={ onAddCateg } // setCateg={ setCateg }
    />

    <ol>
        { 
        categorias.map( (item, indice ) => {
            return <li key={item +" "+ indice} >{item}</li>
        }) 
        }
        <li>Final simple</li>
    </ol>



    </>)
}
