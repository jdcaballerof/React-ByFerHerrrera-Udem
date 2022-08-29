export const getGifsData = async(categoria, numDeGifs) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Fvtm99rA9SCADFiHQ3ZlVb4PvaO4z78v&q=${ categoria }&limit=${numDeGifs}`
    const respuesta = await fetch( url );
    const {data} = await respuesta.json(); //es un arreglo de objetos
    // console.log(data)     //Ver toda la data
    const gifs = data.map( img => ({   //Data reducida
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    })
    )
    console.log(gifs);
    return gifs; //Retorna el array de objetos
}