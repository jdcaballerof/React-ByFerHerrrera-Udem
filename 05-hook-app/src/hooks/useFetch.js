import { useEffect, useState } from "react";



export const useFetch = (url) => {

    const [estado, setEstado] = useState({
      data: null,
      isLoading: true,
      hasError: null,
    });

    const getPeticion = async() => {
        setEstado({
            ...estado,
            isLoading: true
          });

        const resp = await fetch(url)
        const dataRecibida = await resp.json()

        setEstado({
            data: dataRecibida,
            isLoading: false,
            hasError: null,
          });
    }

    useEffect(() => {
      getPeticion()
    
    }, [url])       //Activar cada que cambie el url
    


  return {
    data: estado.data,
    isLoading: estado.isLoading,
    hasError: estado.hasError,
  };
}
