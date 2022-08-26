

export const GifItem_forGrid = ( {titulo, id, url} ) => {


  return (
    <div className="card">
        <img src={url} alt={titulo}/>
        <p>{titulo}</p> 
    </div>
  )
}
