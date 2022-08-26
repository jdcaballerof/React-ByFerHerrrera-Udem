import { useEffect, useState } from "react";
import { getGifsData } from "../Helpers/getGifsData";
import { GifItem_forGrid } from "./GifItem_forGrid";


export const GifGrid = ({categoria, numDeGifs}) => {

//Valor a mostrat en la lista
    const [imagenes, setImagenes] = useState( [] ); //Agrega al array la nueva data del gif (como un objeto)
//Valor a mostrat en la lista


    const obtenerImagenes = async() => {
        const nuevoGifData = await getGifsData(categoria, numDeGifs);
        setImagenes(nuevoGifData) 
    }

    useEffect(() => {
        obtenerImagenes()
    }, [])  
    

    return (
    <>
        <h3>{ categoria }</h3>
        <div className="card-grid">
            {
                imagenes.map( item => (
                    <GifItem_forGrid key={item.id} titulo={item.title} {...item} />
                ) )
            }
        </div>

        {/* <code>{ JSON.stringify( getGifs(categoria, numDeGifs) ) } </code > */}

    </>  
  )
}
