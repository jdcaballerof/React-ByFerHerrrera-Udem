import { useEffect, useState } from "react";
import { getGifsData } from "../Helpers/getGifsData";

export const useFetchGifs = ( categoria, numDeGifs ) => {

  //Valor a mostrat en la lista
  const [imagenes, setImagenes] = useState([]); //Agrega al array la nueva data del gif (como un objeto)
  //Valor a mostrat en la lista

  const [isLoading, setIsLoading] = useState(true)

  const obtenerImagenes = async () => {
    const nuevoGifData = await getGifsData(categoria, numDeGifs);
    setImagenes(nuevoGifData);
    setIsLoading(false);
  };

  useEffect(() => {
    obtenerImagenes();
  }, []);

  return {
    images: imagenes,
    isLoading,
  };
};
