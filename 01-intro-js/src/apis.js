export function PlayApi(){

    const getImage = async() =>{
        const api_key = "kX1PJBc6sbvCxvmVs77vdLEWUffDzGGX";
        const peticionDeApi = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const {data} = await peticionDeApi.json();

        const {url} = data.images.original; //arroja un objeto por lo que se desestructura...


        //Añadir la imagen
     /* const imagenGiphy = document.createElement("img");
        imagenGiphy.src = url; 
        document.body.append(imagenGiphy)*/
        document.getElementById('gif').innerHTML = `<img src=${url} alt="gif"/>
        `
    }  

    getImage()
}

