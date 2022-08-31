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
        setEstadoFormulario( formaInicial )
      }
  
  
  
    return {
        estadoFormulario,
        ...estadoFormulario,
        onCambioDelInput,
        onResetearForm

    }
}
