import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem_forGrid } from "./GifItem_forGrid";


export const GifGrid = ({categoria, numDeGifs}) => {

    const { images:imagenes, isLoading } = useFetchGifs( categoria, numDeGifs )
    console.log('Esta cargando:',isLoading)


    return (
    <>
        <h3>{ categoria }</h3>

        {/* If pequeño */}
        { isLoading && (<h2>Cargando...</h2>) }  

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
