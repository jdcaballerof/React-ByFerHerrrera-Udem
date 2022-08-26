
export const getImagen = async() => {

    try {
        const apiKey = "Fvtm99rA9SCADFiHQ3ZlVb4PvaO4z78v";
        const peticionDeApi = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await peticionDeApi.json();
        // console.log(data);
        const {url} = data.images.original;
        // console.log(data.images.original);
        // console.log(url)
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se pudo obtener link';
        // throw error;
    }
    
    
    
}

// getImagen()
// .then( succ=>console.log(succ) )



