import { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";

  
  
  export const SimpleForm = () => {

       const [estadoFormulario, setEstadoFormulario] = useState({
        username: "Goku",
        email: "goku@gmail.com",
        prueba1: 23
       })
       const { username, email} = estadoFormulario

       const onCambioDelInput = (event) => {
        const {target} = event; 
        const {value, name} = target; 
        setEstadoFormulario({
          ...estadoFormulario, 
          elementAfectado: name,  // Se puede añadir otro elemento al obj
          prueba1: 0,             // Se puede cambiar el valor de un elemento 
          [ name ]: value,        //*Con ayuda de la propiedad name de <input> y el que se pueda leer del event, podemos entrar a la Key requerida y cambiar su valor por el que estaba MAS el cambio realizado (value). Si name no tiene correlación con una Key entonces creará otro elemento en el objeto
        })
       }


       useEffect(() => {
         console.log('useEffect ejecutado');
       }, [])                       //Al renderizar
       
       useEffect(() => {
        //  console.log("cambio en el formulario");
       }, [estadoFormulario]);      //Al cambiar algo del objeto Formulario
       
       useEffect(() => {
        //  console.log("cambio el email");
       }, [email]);                 //Al cambiar el valor de email dentro del obj Formulario


    return (
      <>
        <h2>Formulario simple</h2>

        <input type="text" className='form-control m-2' placeholder='Usuario' name='username' value={username} onChange={ onCambioDelInput }  />
        <input type="email" className='form-control m-2' placeholder='Usuario@email.com' name='email' value={email} onChange={ onCambioDelInput } />

        { (username === 'Goku2') && <Mensaje />    }
      </>
    );
  }
  