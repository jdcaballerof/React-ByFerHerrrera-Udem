import { useEffect, useState } from "react";


export const Mensaje = () => {

  const [coords, setCoords] = useState({x1: 0, y1: 0})
  

    useEffect(() => {

        const onMoverMouse = ({x, y}) => {      //del event desestructura... x, y (coords del puntero)
        // const coordsMouse = { x, y };        //crea un objeto con ambos valores recibidos
          setCoords({x1: x, y1: y})                     
      }
        //recibe y envia el (event), por eso no se escribe en onMoverMouse
        window.addEventListener('mousemove', onMoverMouse ) 


      return () => {
        window.removeEventListener('mousemove', onMoverMouse)
      }
    }, [])
    

  return (
    <>
    <h3>Usuario ya existe</h3>
    { JSON.stringify( coords ) }
    
    
    </>
  )
}
