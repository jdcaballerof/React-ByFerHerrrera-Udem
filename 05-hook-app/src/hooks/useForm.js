import { useState } from "react"


export const useForm = ( formaInicial={} ) => {

    const [estadoFormulario, setEstadoFormulario] = useState( formaInicial )

       const onCambioDelInput = (event) => {
        const {target} = event; 
        const {value, name} = target; 
        setEstadoFormulario({
          ...estadoFormulario,           
          [ name ]: value,        
        })
       }

       const onResetearForm = () => {
        setEstadoFormulario({
          username: "veg",
          email: "",
          contraseña1: ''
         })
  
      }
  
  
  
    return {
        estadoFormulario,
        ...estadoFormulario,
        onCambioDelInput,
        onResetearForm

    }
}
